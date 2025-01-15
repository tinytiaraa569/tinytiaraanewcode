const cloudinary = require('cloudinary');
const Chatbot = require('../model/chatbot');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/Errorhandler');
const express = require("express")
const router = express.Router()

// Initialize router


// POST /customise/detail - Create a new customisation request
router.post("/chatbotmsg", catchAsyncErrors(async (req, res, next) => {
    try {
        // Extract fields from the request body
        const { name, email, productQuery, phoneNumber ,feedback ,otherQuery } = req.body;

        // Create a new customisation document
        const chatbotmsg = await Chatbot.create({
            name,
            email,
            productQuery,
            phoneNumber,
            feedback,
            otherQuery,

        });

        // Send a success response
        res.status(201).json({
            success: true,
            message: "Thank you for reaching out to us! We will review your message and get back to you as soon as possible.",
            chatbotmsg,
        });
    } catch (error) {
        // Handle errors
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
}));



router.get("/all/chatbotmessage", catchAsyncErrors(async (req, res, next) => {
    try {
        const chatbotRequests = await Chatbot.find().sort({ CreatedAt: -1 });

        res.status(200).json({
            success: true,
            chatbotRequests,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
}));





// Export the router
module.exports = router;