const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    bannerimg: {
        public_id: {
            type: String,
            // Not required, as per your preference
        },
        url: {
            type: String,
            // Not required, as per your preference
        },
    },
    link: {
        type: String,
    },
    isLive: {
        type: Boolean,
        default: false, // Initially, the blog is not live
    },
    date: {
        type: String, // Corrected type
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the created date
    },
});

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
