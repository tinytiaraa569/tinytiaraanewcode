import React, { useEffect, useState, useRef } from 'react';
import { IoIosClose } from "react-icons/io";
import { IoMdCloudUpload } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardHeader from '@/ShopDashboardPage/DashboardHeader';
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar';
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios'; // Import axios for API requests
import { imgdburl, server } from '@/server';
import swal from 'sweetalert';

function NewBanner() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [btntext, setBtntext] = useState('');
    const [collectionname, setCollectionname] = useState('');

   const [gradientFrom, setGradientFrom] = useState("#f43f5e")
const [gradientTo, setGradientTo] = useState("#ec4899")
const [textColor, setTextColor] = useState("#7f1d1d")


    

    const [link, setLink] = useState('');
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch banner or a single banner by ID dynamically
    useEffect(() => {
        if (id) {
            // Fetch a specific banner by ID
            axios.get(`${server}/get-banner/${id}`)
                .then((response) => {
                    const banner = response.data.banner;
                    setTitle(banner.title);
                    setLink(banner.link);
                    setImages(banner.images);
                    setDesc(banner?.desc)
                    setBtntext(banner?.btntext)
                    setCollectionname(banner?.collectionname)

                     // Extract hex codes from Tailwind-like string format
                    const colorMatch = banner?.color?.match(/from-\[#(.*?)\]\s+to-\[#(.*?)\]/);
                    if (colorMatch) {
                        setGradientFrom(`#${colorMatch[1]}`);
                        setGradientTo(`#${colorMatch[2]}`);
                    }

                    const textColorMatch = banner?.textColor?.match(/text-\[#(.*?)\]/);
                    if (textColorMatch) {
                        setTextColor(`#${textColorMatch[1]}`);
                    }
                    })
                .catch((error) => {
                    console.error('Error fetching banner by ID:', error);
                    setErrors({ fetchError: 'Could not fetch banner details' });
                });
        }
    }, [id]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        handleFileUpload(files);
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        handleFileUpload(files);
    };

    const handleFileUpload = (files) => {
        // setImages([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImages((old) => [...old, { url: reader.result, isNew: true }]); // Add new images with a flag
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleClickToSelect = () => {
        fileInputRef.current.click();
    };

    const removeImage = () => {
        setImages([]);
        setErrors(prev => ({ ...prev, images: null }));
    };

    const handleSubmit = async (e) => {
        const color = `from-[${gradientFrom}] to-[${gradientTo}]`
        const textColorClass = `text-[${textColor}]`
        e.preventDefault();
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Title is required.";
        }

        if (images.length === 0) {
            newErrors.images = "At least one image is required.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Prepare banner data with URLs instead of Base64
            console.log(images,"see the images")
            setIsUploading(true);
            const bannerData = { title, link, images,desc,btntext,collectionname , color,textColor: textColorClass,};
           

            try {
                if (id) {
                    // Update logic
                    await axios.put(`${server}/update-banner/${id}`, bannerData);
                    console.log('Updating banner:', { id, ...bannerData });
                    swal({
                        title: "Banner Updated!",
                        text: "Your banner has been successfully updated.",
                        icon: "success",
                        button: "Ok",
                      });
                      
                } else {
                    // Create logic
                    await axios.post(`${server}/home-create-banners`, bannerData);
                    swal({
                        title: "Banner Created!",
                        text: "Your new banner has been successfully created.",
                        icon: "success",
                        button: "Ok",
                      });
                    console.log('Creating banner:', bannerData);
                }
                navigate("/create-Banners");
            } catch (error) {
                console.error("Error while saving banner:", error);
                swal({
                    title: "Oops!",
                    text: "Something went wrong while saving your banner. Please try again.",
                    icon: "error",
                    button: "Ok",
                  });
                setErrors(prev => ({ ...prev, server: "Error saving banner. Please try again." }));

            }finally {
                setIsUploading(false); // Hide uploading overlay
            }
        }
    };



    return (
        <div>
            <DashboardHeader />
            <div className="w-full flex justify-between">
                <div >
                    <DashboardSideBar />
                </div>
                <div className="w-full m-5 shadow-lg border border-gray-200">
                    <div className="flex mt-4">
                        <div className="ml-4 flex items-center justify-start">
                            <div
                                className="bg-slate-700 rounded text-white flex items-center justify-center py-3 px-5 cursor-pointer"
                                onClick={() => navigate("/create-Banners")}
                            >
                                <IoMdArrowRoundBack />
                                <button className="ml-2">Go Back</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[90%] m-4 shadow-md border border-gray-100 flex justify-between items-center px-3 py-3">
                            <h1 className="text-[18px] text-[#000000cf] pl-7">{id ? 'Edit Banner' : 'New Banner'}</h1>
                            <IoIosClose size={24} className="cursor-pointer" onClick={() => navigate("/create-Banners")} />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="mx-auto py-6 w-[90%] shadow-lg border border-gray-200">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center w-[100%] m-3 gap-4">
                                <div className="mb-2 w-[45%]">
                                    <label className="block text-sm text-gray-600 mb-2">Banner Title <span className='text-red-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter banner title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                                </div>

                                <div className="mb-2 w-[45%]">
                                    <label className="block text-sm text-gray-600 mb-2">Banner Link (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter link URL"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center w-[100%] m-3 gap-4'>
                                 <div className="mb-2 w-[45%]">
                                    <label className="block text-sm text-gray-600 mb-2">Collection (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter collection name"
                                        value={collectionname}
                                        onChange={(e) => setCollectionname(e.target.value)}
                                    />
                                </div>
                                 <div className="mb-2 w-[45%]">
                                    <label className="block text-sm text-gray-600 mb-2">Button text (Optional)</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter button text "
                                        value={btntext}
                                        onChange={(e) => setBtntext(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className='flex justify-center w-[100%] m-3 gap-4'>
                                <div className="mb-2 w-[92%]">
                                    <label className="block text-sm text-gray-600 mb-2">Description text (Optional)</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter button text "
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    >
                                    

                                    </textarea>
                                </div>


                            </div>


                           <div className="flex justify-center w-full m-3 gap-4">
                            <div className='flex w-[45%]'>

                                <div className="mb-2 w-full">
                                    <label className="block text-sm text-gray-600 mb-2">Gradient From Color</label>
                                    <input
                                    type="color"
                                    className="w-36 h-10 border border-gray-300 rounded-md cursor-pointer"
                                    value={gradientFrom}
                                    onChange={(e) => setGradientFrom(e.target.value)}
                                    />
                                </div>

                                <div className="mb-2 w-full">
                                    <label className="block text-sm text-gray-600 mb-2">Gradient To Color</label>
                                    <input
                                    type="color"
                                    className="w-36 h-10 border border-gray-300 rounded-md cursor-pointer"
                                    value={gradientTo}
                                    onChange={(e) => setGradientTo(e.target.value)}
                                    />
                                </div>
                            </div>


                                <div className="mb-2 w-[45%]">
                                    <label className="block text-sm text-gray-600 mb-2">Text Color</label>
                                    <input
                                    type="color"
                                    className="w-36 h-10 border border-gray-300 rounded-md cursor-pointer"
                                    value={textColor}
                                    onChange={(e) => setTextColor(e.target.value)}
                                    />
                                </div>
                                </div>


                            

                            {/* Image Upload Section */}
                            <div className="m-3 mx-auto w-[90%]">
                                <div className="mb-5">
                                    <label className="block text-sm text-gray-600 mb-2">Upload Banner Image <span className='text-red-500'>*</span></label>
                                    <div
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`border-2 ${isDragging ? 'border-blue-400' : 'border-gray-300'} border-dashed rounded-md p-5 flex flex-col items-center justify-center cursor-pointer`}
                                        onClick={handleClickToSelect}
                                    >
                                        {images.length === 0 ? (
                                            <>
                                                <IoMdCloudUpload size={40} />
                                                <p className="mt-2 text-gray-600">Drag & drop your image here or click to upload</p>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    ref={fileInputRef}
                                                    onChange={handleFileSelect}
                                                    className="hidden"
                                                />
                                            </>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={images[0]?.url.includes("base64") ? `${images[0].url}` : `${imgdburl}${images[0]?.url}`}
                                                    alt="Banner Preview"
                                                    className="w-full h-[200px] object-cover rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1"
                                                >
                                                    <IoIosClose />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    {errors.images && <p className="text-red-600 text-sm">{errors.images}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                                    {id ? 'Update Banner' : 'Create Banner'}
                                </button>
                            </div>

                            {errors.server && <p className="text-red-600 text-sm text-center">{errors.server}</p>}
                        </form>
                    </div>
                </div>
            </div>
             {/* Uploading Overlay */}
             {isUploading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="text-white text-xl">Uploading...</div>
                </div>
            )}
        </div>
    );
}

export default NewBanner;
