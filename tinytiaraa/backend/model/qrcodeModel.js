const mongoose = require('mongoose');

const qrCodeSchema  = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    url: { type: String, required: true }, // The generated QR Code URL
    redirectUrl: { type: String, required: true }, // The actual destination URL
    qrImage: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    }
    
});

// Create the Blog model
const QRCode = mongoose.model('QRCode', qrCodeSchema );

module.exports = QRCode;
