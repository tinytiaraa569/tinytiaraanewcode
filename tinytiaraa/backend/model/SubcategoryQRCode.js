const mongoose = require('mongoose');

const subcategoryQrCodeSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  qrImage: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SubcategoryQRCode', subcategoryQrCodeSchema);
