const mongoose = require("mongoose");

const salesorderSchema = new mongoose.Schema({
    orderID: {
        type: String,
        unique: true, // Ensures no duplicate order IDs
        required: true,
    },
    cart: {
        type: Array,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    number: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    venue: {
        type: String,
    },
    status: {
        type: String,
    },
    invoice: {
        type: String, // Path to the invoice PDF
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("SalesOrder", salesorderSchema);
