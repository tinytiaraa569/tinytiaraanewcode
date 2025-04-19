import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RiCloseFill } from 'react-icons/ri';
import { AiFillStar, AiOutlineStar, AiOutlinePlusCircle } from 'react-icons/ai';
import { TfiHandDrag } from 'react-icons/tfi';
import { useNavigate, useParams } from 'react-router-dom';
import {  server } from '@/server';
import axios from 'axios';
import swal from 'sweetalert';


const CustomerReview = () => {
  const { id } = useParams();
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [images, setImages] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [editingReviewId, setEditingReviewId] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

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
    e.target.value = ''; // Reset input
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData('index');
    const updatedImages = [...images];
    const draggedImage = updatedImages.splice(draggedIndex, 1)[0];
    updatedImages.splice(index, 0, draggedImage);
    setImages(updatedImages);
    setDraggingIndex(null);
  };

  const handleSubmitReview = async () => {
    // Basic validation
        if (!name.trim()  || rating === 0 || !comment.trim()) {
            swal({
            title: 'Missing Fields!',
            text: 'Please fill in all required fields: name, rating, and comment.',
            icon: 'error',
            button: 'OK',
            });
            return; // prevent submission
        }
    const reviewData = {
        
      productId: id,
      user: { name, email, avatar },
      
      rating,
      comment,
      date,
      images: images.map((img) => ({
        url: img,
        public_id: `mock-${Math.random()}`
      }))
    };
    const response = await axios.post(
        `${server}/product/create-customer-review-offline`,
        reviewData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
       // Show success alert
    swal({
        title: 'Review Submitted!',
        text: 'Your review was posted successfully.',
        icon: 'success',
        button: 'OK',
      }).then(() => {
        // Navigate to home after clicking "OK"
        navigate('/');
      });
    setAvatar(null);
    setName('');
    setEmail('');
    setRating(0);
    setComment('');
    setImages([]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl my-5 border border-gray-100 !mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-0.5">
        Write a Review
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        We value your feedback. Let us know what you loved or what could be better.
      </p>

      {/* Avatar Upload */}
      <div className="mb-5 flex flex-col items-center">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Upload your photo 
      </label>
        <div className="flex flex-col items-center gap-2">
          <label className="cursor-pointer px-4 py-2 bg-gray-100 border border-dashed border-gray-300 rounded-lg hover:bg-gray-200 text-sm">
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
            Choose File
          </label>
          {avatar && (
            <img
              src={avatar}
              alt="Avatar"
              className="w-16 h-16 object-cover rounded-full border shadow"
            />
          )}
        </div>
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full text-sm"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-2">
        <label className="font-medium text-gray-700 block mb-2">
          Rating <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) =>
            rating >= i ? (
              <AiFillStar key={i} onClick={() => setRating(i)} className="cursor-pointer" color="gold" size={24} />
            ) : (
              <AiOutlineStar key={i} onClick={() => setRating(i)} className="cursor-pointer" color="gold" size={24} />
            )
          )}
        </div>
      </div>

      {/* Comment */}
      <div className="mb-2">
        <label className="font-medium text-gray-700 block mb-2">
          Your Comment <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          placeholder="Write at least 10–15 words about your experience…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-5">
        <label className="font-medium text-gray-700 block mb-2">
          Upload Images 
        </label>
        <input type="file" id="upload" className="hidden" multiple onChange={handleImageChange} />
        <label
          htmlFor="upload"
          className="inline-flex items-center gap-1 cursor-pointer text-green-800 mb-4 hover:underline"
        >
          <AiOutlinePlusCircle size={20} /> Upload Images
        </label>

        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={`relative w-28 h-28 rounded overflow-hidden border shadow-md ${
                draggingIndex === index ? 'opacity-50' : ''
              }`}
            >
              <img src={image} alt="review" className="w-full h-full object-cover" />
              <TfiHandDrag className="absolute top-1 left-1 text-white bg-black/60 p-1 rounded-full" size={16} />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
              >
                <RiCloseFill size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmitReview}
        className="w-full bg-[#005c3c] text-white py-2 rounded-[10px] font-semibold hover:bg-[#004a30] transition"
      >
        {editingReviewId ? 'Update Review' : 'Submit Review'}
      </button>
    </div>
  );
};

export default CustomerReview;
