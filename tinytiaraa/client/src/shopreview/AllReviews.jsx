import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiOutlinePlusCircle } from 'react-icons/ai';
import { TfiHandDrag } from 'react-icons/tfi';
import { RiCloseFill, RiDeleteBin6Line } from 'react-icons/ri';
import { imgdburl, server } from '@/server';
import axios from 'axios';
import { FiEdit2 } from 'react-icons/fi';

const AllReviews = () => {
  const { id } = useParams();
  const { products = [], isLoading } = useSelector((state) => state.products);

  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [draggingIndex, setDraggingIndex] = useState(null);

  const [editingReviewId, setEditingReviewId] = useState(null);

  const product = products.find((p) => p._id === id);

  if (isLoading) {
    return <div className="text-center mt-10 text-sm text-gray-600">Loading reviews...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-red-500 text-sm">Product not found.</div>;
  }

  const reviews = product.reviews || [];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((prev) => [...prev, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDraggingIndex(index);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, index) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    if (fromIndex === index) return;

    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(index, 0, movedImage);
    setImages(updatedImages);
    setDraggingIndex(null);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setRating(1);
    setComment('');
    setImages([]);
    setName('');
    setEmail('');
    setAvatar(null);
    setDate('');
  };

  const handleSubmitReview = async () => {
    const newReview = {
       productId :product?._id,
      user: { name, email, avatar },
      rating,
      comment,
      date:date,
      images: images.map((img) => ({
        url: img,
        public_id: `mock-${Math.random()}`
      }))
    };

    if(editingReviewId){
        
        try {
            const response = await axios.put(
                `${server}/product/edit-fake-review/${product?._id}/${editingReviewId}`,
                newReview,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  withCredentials: true,
                }
              );

              swal({
                title: "Review Updated",
                text: "Your review has been successfully updated!",
                icon: "success",
                button: "Ok",
              });
               // Reset form on successful submission
               setShowModal(false);
               setRating(1);
               setComment('');
               setImages([]);
               setName('');
               setEmail('');
               setAvatar(null);
               setDate('');
               window.location.reload()
            
        } catch (error) {
            console.error('Error submitting review:', error);
        }
       

    }else{
        try {
            // Send the POST request to the backend to submit the fake review
            const response = await axios.post(`${server}/product/create-fake-review`, newReview, {
              headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
              }, withCredentials: true,
            });
            swal({
                title: "Review Created ",
                text: "Your review has been successfully created!",
                icon: "success",
                button: "Ok",
              });
        
            
        
            // Reset form on successful submission
            setShowModal(false);
            setRating(1);
            setComment('');
            setImages([]);
            setName('');
            setEmail('');
            setAvatar(null);
            setDate('');
            window.location.reload()
        
          } catch (error) {
            console.error('Error submitting review:', error);
            // You can add additional error handling here
          }

    }

    
  };



  const handleEdit = (review) => {
    setEditingReviewId(review._id);
    setName(review.user?.name || "");
    setEmail(review.user?.email || "");
    setRating(review.rating || 0);
    setComment(review.comment || "");
    setAvatar(review.user?.avatar ? `${imgdburl}${review.user.avatar}` : "");
    setImages(review.images?.map(img => `${imgdburl}${img.url}`) || []);
    setDate(review.CreatedAt ? new Date(review.CreatedAt).toISOString().substr(0, 10) : "");
    setShowModal(true);
  };


  const handleDelete = async (reviewId) => {
    swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            await axios.delete(
              `${server}/product/delete-fake-review/${product?._id}/${reviewId}`,
              { withCredentials: true }
            );
            console.log("Review deleted!");
            window.location.reload(); // Refresh the page or re-fetch product data
          } catch (error) {
            console.log(error.response?.data?.message || "Failed to delete review");
          }
        }
      });
  };
  


  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="w-full md:w-[25%] flex justify-center md:justify-start">
          <img
            className="w-full max-w-[300px] h-[280px] rounded-lg border object-contain shadow-lg"
            src={
              product?.images?.[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                ? product.images[1].url.replace(
                    /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                    `${imgdburl}/uploads/images`
                  )
                : `${imgdburl}${product?.images[1]?.url}`
            }
            alt={product?.name || 'Product Image'}
          />
        </div>
        <div className="flex-1 space-y-2 text-sm text-gray-700">
          <h1 className="text-2xl font-semibold text-gray-800">{product?.name}</h1>
          <p><strong>SKU:</strong> {product?.skuid}</p>
          <p><strong>Price:</strong> ₹{product?.discountPrice}</p>
          <p><strong>Category:</strong> {product?.category}</p>
          <p><strong>Subcategory:</strong> {product?.subcategory}</p>
          <p><strong>Description:</strong> {product?.description}</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-5 py-2 bg-black text-white text-xs rounded hover:bg-gray-800 transition"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h3 className="text-xl font-medium text-gray-800 mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-500">No reviews for this product yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
                
                <div className="flex items-start gap-4">
                {review?.user?.avatar && review.user.avatar.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                    ? (
                        <img
                        src={review.user.avatar
                            .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                            .replace("/avatars/", "/products/")
                        }
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border"
                        />
                    ) : review?.user?.avatar ? (
                        <img
                        src={`${imgdburl}${review.user.avatar}`.replace("/avatars/", "/products/")}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm border">
                        {review?.user?.name
                            ? review.user.name
                                .split(" ")
                                .map(n => n[0])
                                .slice(0, 2)
                                .join("")
                                .toUpperCase()
                            : "NA"}
                        </div>
                    )
                    }

                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">{review.user?.name || 'Anonymous'}</p>
                    <p className="text-gray-500 text-xs">
                        {new Date(review.CreatedAt).toLocaleDateString('en-GB')}
                        </p>
                        <p className="text-yellow-500 text-sm mb-1">
                            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                            </p>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                    {review.images?.length > 0 && (
                      <div className="mt-3 flex gap-3 flex-wrap">
                        {review.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={`${imgdburl}${img.url}`}
                            alt={`Review Image ${idx + 1}`}
                            className="w-24 h-24 object-cover border rounded shadow"
                          />
                        ))}
                      </div>
                    )}
                    {review.createdAt && (
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(review.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    )}
                  </div>

                   {/* Edit/Delete Icons */}
                    <div className="  flex gap-2">
                    <button
                        onClick={() => handleEdit(review)}
                        className="text-blue-500 hover:text-blue-600 cursor-pointer"
                        title="Edit Review"
                    >
                        <FiEdit2 size={18} />
                    </button>
                    <button
                        onClick={() => handleDelete(review._id)}
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        title="Delete Review"
                    >
                        <RiDeleteBin6Line size={18} />
                    </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-[10px] shadow-lg space-y-4 relative max-h-[90vh] overflow-y-scroll">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
              onClick={handleCloseModal}
            >
              <RiCloseFill size={24} />
            </button>
            <h2 className="text-xl font-semibold">Write a Review</h2>

            {/* Avatar Upload */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl w-full  mx-auto">
            <label className="font-semibold block text-sm text-gray-700 mb-2">
                Upload Avatar <span className="text-gray-500 text-sm font-normal">(Optional)</span>
            </label>
            
            <div className="flex items-center gap-4">
                <label className="cursor-pointer flex items-center justify-center bg-gray-100 text-gray-600 border border-dashed border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition duration-200 text-sm">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                />
                Choose File
                </label>

                {avatar && (
                <img
                    src={avatar}
                    alt="Avatar Preview"
                    className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
                />
                )}
            </div>
            </div>

            <input
              type="text"
              placeholder="Users Name"
              className="w-full border p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Users Email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Rating */}
            <div>
              <p className="font-semibold mb-1">Give a Rating <span className="text-red-500">*</span></p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) =>
                  rating >= i ? (
                    <AiFillStar key={i} onClick={() => setRating(i)} className="cursor-pointer" color="gold" size={25} />
                  ) : (
                    <AiOutlineStar key={i} onClick={() => setRating(i)} className="cursor-pointer" color="gold" size={25} />
                  )
                )}
              </div>
            </div>

            {/* Comment */}
            <textarea
              placeholder="Your Comment"
              className="w-full border p-2 rounded"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            {/* Date Picker (Optional) */}
            <div className="mt-4">
              <label htmlFor="review-date" className="font-semibold">Select Review Date (Optional)</label>
              <input
                type="date"
                id="review-date"
                className="w-full border p-2 rounded mt-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>


            {/* Image Upload */}
            <div>
              <label className="font-semibold block mb-1">Upload Images <span className="text-gray-500">(Optional)</span></label>
              <input type="file" id="upload" className="hidden" multiple onChange={handleImageChange} />
              <label htmlFor="upload" className="cursor-pointer inline-block mb-2">
                <AiOutlinePlusCircle size={30} />
              </label>
              <div className="flex flex-wrap">
                {images.map((image, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className={`relative m-2 ${index === draggingIndex ? 'opacity-50' : ''}`}
                  >
                    <img src={image} alt="Review" className="w-44 h-44 object-cover rounded shadow border" />
                    <TfiHandDrag className="absolute top-1 left-1 text-white bg-black/50 rounded-full p-1" size={18} />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 text-white bg-red-500 rounded-full p-1"
                    >
                      <RiCloseFill size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSubmitReview}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
               {editingReviewId ? "Update Review" : "Submit Review"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
