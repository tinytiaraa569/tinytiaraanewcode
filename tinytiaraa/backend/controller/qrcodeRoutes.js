const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const ErrorHandler = require('../utils/Errorhandler');
const crypto = require('crypto');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const QRCode = require('../model/qrcodeModel');
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};

// Function to process base64 QR Code Image
const processBase64Image = (base64Image) => {
  if (typeof base64Image === "string" && base64Image.startsWith("data:image")) {
    const matches = base64Image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) return null;

    let mimeType = matches[1];
    const base64Data = matches[2];

    // Ensure the extension is 'svg' if the MIME type is 'image/svg+xml'
    let extension = mimeType === "image/svg+xml" ? "svg" : mimeType.split('/')[1];

    const uniqueId = generateRandomString(20);
    const localImagePath = path.join(__dirname, '../uploads/images/products', `${uniqueId}.${extension}`);

    fs.writeFileSync(localImagePath, Buffer.from(base64Data, 'base64'));

    return {
      public_id: `products/${uniqueId}`,
      url: `/uploads/images/products/${uniqueId}.${extension}`
    };
  }
  return { url: base64Image }; // If not base64, return the original path
};


router.get("/qrcode/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Received QR Code categoryId:", id);

    // No need to check if id is a valid ObjectId because categoryId is a string
    const qrCode = await QRCode.findOne({ categoryId: id });

    if (!qrCode) {
      console.log("QR Code not found for categoryId:", id);
      return res.status(404).send("QR Code not found");
    }

    console.log("Found QR Code:", qrCode);

    res.status(200).json({ redirectUrl: qrCode.redirectUrl });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});



router.post("/save-qrcode", async (req, res) => {
  try {
    const { categoryId, url, redirectUrl, qrImageBase64 } = req.body;

    if (!categoryId || !url || !redirectUrl || !qrImageBase64) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const processedQRImage = processBase64Image(qrImageBase64);

    // Create and save the QR Code entry
    const newQRCode = new QRCode({
      categoryId,
      url,
      redirectUrl,
      qrImage: processedQRImage,
    });

    await newQRCode.save();

    // Generate the correct QR redirect URL using the QR Code's `_id`
    const qrRedirectUrl = `https://tiny-tiaraanew.vercel.app/qrcode/${newQRCode._id}`;

    res.status(201).json({
      success: true,
      message: "QR Code saved successfully",
      data: { ...newQRCode.toObject(), qrRedirectUrl },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

  
  // Get all QR Codes
  router.get("/get-all-qrcodes", async (req, res) => {
    try {
      const qrcodes = await QRCode.find().populate("categoryId", "title");
      res.json(qrcodes);
    } catch (error) {
      res.status(500).json({ message: "Error fetching QR Codes", error });
    }
  });
  

  router.put("/update-qrcode/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { categoryId, url, redirectUrl } = req.body; // Added redirectUrl
  
      // Find the existing QR Code entry
      const qrCode = await QRCode.findById(id);
      if (!qrCode) {
        return res.status(404).json({ success: false, message: "QR Code not found" });
      }
  
      // Update the fields
      qrCode.categoryId = categoryId || qrCode.categoryId;
      qrCode.url = url || qrCode.url;
      qrCode.redirectUrl = redirectUrl || qrCode.redirectUrl; // Allow updating redirectUrl
  
      await qrCode.save();
  
      res.status(200).json({ success: true, message: "QR Code updated successfully", data: qrCode });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  });


module.exports = router;
