const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require('express')
const SalesUser = require("../model/salesUserModel");

const router = express.Router()

// Register Sales User
router.post("/saleuser/register", async (req, res, next) => {

  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let existingUser = await SalesUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new sales user
    const salesUser = await SalesUser.create({
      name,
      email,
      password,
    });

    // Generate JWT Token
    const token = salesUser.getJwtToken();

    res.status(201).json({
      success: true,
      token,
      salesUser: {
        _id: salesUser._id,
        name: salesUser.name,
        email: salesUser.email,
        role: salesUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})



// Login Sales User
router.post("/saleuser/login", async (req, res, next) => {  
  try {
    const { email, password } = req.body;

    // Check if user exists
    const salesUser = await SalesUser.findOne({ email }).select("+password");
    if (!salesUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await salesUser.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = salesUser.getJwtToken();

    res.status(200).json({
      success: true,
      token,
      salesUser: {
        _id: salesUser._id,
        name: salesUser.name,
        email: salesUser.email,
        role: salesUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


// Get Sales User Profile

router.get("/saleuser/getuser", async (req, res, next) => {  
    
  try {
    const salesUser = await SalesUser.findById(req.user.id);
    if (!salesUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ success: true, salesUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


router.post("/saleuser/logout", async (req, res, next) => {
  try {
    // Clear the token from cookies
    res.cookie("salesToken", "", {
      httpOnly: true,
      expires: new Date(0), // Set expiration to past
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router




