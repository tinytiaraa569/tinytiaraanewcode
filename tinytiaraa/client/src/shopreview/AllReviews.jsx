import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiOutlinePlusCircle } from 'react-icons/ai';
import { TfiHandDrag } from 'react-icons/tfi';
import { RiCloseFill, RiDeleteBin6Line } from 'react-icons/ri';
import { imgdburl, server } from '@/server';
import axios from 'axios';
import { FiEdit2 } from 'react-icons/fi';
import swal from 'sweetalert';

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
  
  const createShareContent = (shareUrl, closeSwal) => {
    const container = document.createElement("div");
  
    container.innerHTML = `
      <p style="margin-bottom: 8px; font-size: 14px;">${shareUrl}</p>
      <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
      
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
          `Check this out: ${shareUrl}`
        )}" target="_blank" rel="noopener noreferrer"
          id="share-whatsapp"
          style="display: flex; align-items: center; gap: 6px; background-color: #25D366; color: white; padding: 6px 12px; border-radius: 5px; text-decoration: none; font-size: 13px;">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15s-.773.966-.948 1.164c-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.922-2.209-.242-.579-.487-.501-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.004 2C6.477 2 2 6.484 2 12.021c0 1.916.504 3.767 1.46 5.399L2 22l4.678-1.441A9.935 9.935 0 0 0 12.004 22c5.523 0 10-4.484 10-9.979C22.004 6.484 17.527 2 12.004 2z"/>
          </svg>
          WhatsApp
        </a>
  
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}" target="_blank" rel="noopener noreferrer"
          id="share-facebook"
          style="display: flex; align-items: center; gap: 6px; background-color: #1877F2; color: white; padding: 6px 12px; border-radius: 5px; text-decoration: none; font-size: 13px;">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.494v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0"/>
          </svg>
          Facebook
        </a>
  
        <a href="sms:?&body=${encodeURIComponent(
          `Hey, check this out: ${shareUrl}`
        )}" id="share-sms"
          style="display: flex; align-items: center; gap: 6px; background-color: #333; color: white; padding: 6px 12px; border-radius: 5px; text-decoration: none; font-size: 13px;">
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M22 2H2C.89 2 0 2.89 0 4v20l4-4h18c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm-4 9H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
          Text Message
        </a>
  
      </div>
    `;
  
    setTimeout(() => {
      const buttons = container.querySelectorAll("a");
      buttons.forEach((btn) =>
        btn.addEventListener("click", () => {
          if (closeSwal) closeSwal();
        })
      );
    }, 100);
  
    return container;
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

                <button
                onClick={() => {
                  const shareUrl = `${window.location.origin}/customer-review/${id}`;
                  navigator.clipboard.writeText(shareUrl).then(() => {
                    swal({
                      title: "Link Copied!",
                      content: createShareContent(shareUrl, swal.close),
                      icon: "success",
                      button: "OK",
                    });
                  });
                }}
                className="mx-2 mt-4 px-5 py-2 bg-black text-white text-xs rounded hover:bg-gray-800 transition"
              >
                Share Review Link
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
