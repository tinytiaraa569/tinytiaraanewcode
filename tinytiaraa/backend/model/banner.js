const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc:{
        type: String,

    },
    btntext:{
        type: String,

    },
    collectionname:{
        type: String,
    },
    link: {
        type: String,
    },
    color:{
 type: String,
    },
    textColor:{
 type: String,
    },
    images: [
        {
            public_id: {
                type: String,
                // Not required, as per your preference
            },
            url: {
                type: String,
                // Not required, as per your preference
            },
        },
    ],
    order: { type: Number, default: 0 }, // Order field
    live: {
        type: Boolean,
        default: true, // Default value for live status
    },
    createdAt: {
        type: Date,
        default: Date.now, // Use Date.now without parentheses
    },
});

// Create the Banner model
const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
