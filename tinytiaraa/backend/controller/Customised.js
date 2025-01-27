const cloudinary = require('cloudinary');
const Customisation = require('../model/Customised');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/Errorhandler');
const express = require("express")
const router = express.Router()
const crypto = require('crypto');
const path = require("path");
const fs = require('fs');
const customordermail = require('../utils/customordermail');

// Initialize router


// POST /customise/detail - Create a new customisation request
// router.post("/request", catchAsyncErrors(async (req, res, next) => {
//     try {
//         // Extract fields from the request body
//         const { name, email, message, phonenumber, images , budget ,address} = req.body;

//         // Validate required fields
//         if (!name || !email || !phonenumber || !message) {
//             return next(new ErrorHandler("All fields are required", 400));
//         }

//         // Process and upload images to Cloudinary
//         let imagesLinks = [];
//         if (images && images.length > 0) {
//             for (let i = 0; i < images.length; i++) {
//                 const result = await cloudinary.v2.uploader.upload(images[i], {
//                     folder: "customisations",
//                 });

//                 imagesLinks.push({
//                     public_id: result.public_id,
//                     url: result.secure_url,
//                 });
//             }
//         }

//         // Create a new customisation document
//         const customisation = await Customisation.create({
//             name,
//             email,
//             message,
//             phonenumber,
//             budget,
//             address,
//             images: imagesLinks.map(img => img.url), // Store only the image URLs
//         });

//         // Send a success response
//         res.status(201).json({
//             success: true,
//             message: "Customisation request submitted successfully!",
//             customisation,
//         });
//     } catch (error) {
//         // Handle errors
//         return next(new ErrorHandler(error.message || "Internal Server Error", 500));
//     }
// }));

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex').slice(0, length); // Generate random bytes and convert to hex
};



router.post(
    "/request",
    catchAsyncErrors(async (req, res, next) => {
        try {
            // Extract fields from the request body
            const { name, email, message, phonenumber, images, budget, address } = req.body;

            // Validate required fields
            if (!name || !email || !phonenumber || !message) {
                return next(new ErrorHandler("All fields are required", 400));
            }

            // Helper function to process and save base64 images locally
            const processBase64Images = (imageArray, imageLinksArray) => {
                for (let i = 0; i < imageArray.length; i++) {
                    const base64Image = imageArray[i];
                    const matches = base64Image.match(/^data:(.+);base64,(.+)$/);
                    if (!matches) {
                        console.error("Invalid image format:", base64Image);
                        continue;
                    }

                    const mimeType = matches[1];
                    const base64Data = matches[2];

                    const extension = mimeType.split("/")[1]; // e.g., 'png', 'jpeg', etc.
                    const imageBuffer = Buffer.from(base64Data, "base64");

                    const uniqueId = generateRandomString(20); // Generate a unique ID
                    const publicId = `products/${uniqueId}`; // Create the public_id

                    // Path to save the image
                    const imagePath = path.join(
                        __dirname,
                        "../uploads/images/products",
                        `${uniqueId}.${extension}`
                    );

                    // Ensure the directory exists
                    const dirPath = path.dirname(imagePath);
                    if (!fs.existsSync(dirPath)) {
                        fs.mkdirSync(dirPath, { recursive: true });
                    }

                    // Save the image to the file system
                    fs.writeFileSync(imagePath, imageBuffer);

                    imageLinksArray.push({
                        public_id: publicId,
                        url: `/uploads/images/products/${uniqueId}.${extension}`,
                    });
                }
            };

            // Initialize an array to store image links
            let imagesArray = [];
            if (typeof images === "string") {
                imagesArray.push(images);
            } else {
                imagesArray = images;
            }

            const imagesLinks = [];
            processBase64Images(imagesArray, imagesLinks);

            const imgdburl = "https://admin.tinytiaraa.com"

            // Create a new customisation document
            const customisation = await Customisation.create({
                name,
                email,
                message,
                phonenumber,
                budget,
                address,
                images: imagesLinks.map((img) => img.url), // Store only the image URLs
            });

            const customhtmlContent = `
           <html>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                font-family: "Poppins", sans-serif;
                box-sizing: border-box;
            }

            .emailconfirm {
                width: 70%;
                margin: auto;
                border: 1px solid #eee;
                padding: 30px;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px !important;
                border-radius: 8px;
                background-color: #fff;
            }

            .headeremail {
                text-align: center;
                padding-bottom: 20px;
            }

            .headeremail img {
                width: 200px;
                margin-bottom: 20px;
            }

            .headeremail h1 {
                font-size: 26px;
                font-weight: 600;
                color: #333;
                margin: 0;
            }

            .orderdetails {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                margin: 20px 0;
            }

            .totalcost {
                text-align: right;
                padding: 15px 0;
            }

            .shippingaddress {
                padding: 20px 0;
            }

            .adjustw {
                font-size: 16px;
                font-weight: 600;
                color: #333;
                display: inline-block;
                width: 100%;
                margin-bottom: 20px;
            }

            h3 {
                font-size: 18px;
                font-weight: 500;
                color: #444;
                margin-bottom: 15px;
            }

            p {
                font-size: 15px;
                color: #666;
            }

            .adjustw img {
                width: 200px;
                height: 180px;
                object-fit: contain;
                border-radius: 8px;
                border: 1px solid #eee;
                margin-top: 10px;
            }

            .view-order-btn {
                padding: 12px 28px;
                background-color: #000;
                color: white !important;
                text-decoration: none;
                font-size: 16px;
                border-radius: 5px;
                display: inline-block;
                text-align: center;
                margin-top: 20px;
            }

            .ordersum {
                margin-top: 15px;
            }

            @media (max-width: 1100px) {
                .emailconfirm {
                    width: 80%;
                }
            }

            @media (max-width: 1000px) {
                .emailconfirm {
                    width: 85%;
                }

                .adjustw img {
                    width: 170px;
                    height: 150px;
                }
            }

            @media (max-width: 650px) {
                .emailconfirm {
                    width: 90%;
                }

                .adjustw img {
                    width: 170px;
                    height: 150px;
                }

                img {
                    width: 120px;
                    height: auto;
                }

                .adj {
                    font-size: 18px;
                }
            }

            .footer {
                color: #888;
                font-size: 12px;
                text-align: center;
                padding-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="emailconfirm">
            <div class="headeremail">
                <img src="https://admin.tinytiaraa.com/uploads/images/logowebsite/duvdwbtbmyr8ipqrevot.png" alt="Tiny Tiaraa Logo">
                <h1>Custom Order Confirmation</h1>
            </div>

            <p>Dear <span style="text-transform: capitalize;">${name}</span>,</p>
            <p>We have received your Tiny Tiaraa customisation request! Thank you for reaching out.</p>

            <div class="yourorder">
                <h3>Order Summary</h3>
                <div class="orderdetails">
                    <h4>Message: ${message}</h4>
                    <p><strong>Budget:</strong> ₹${budget}</p>
                    <p><strong>Shipping Address:</strong> ${address}</p>
                    <p><strong>Phone:</strong> ${phonenumber}</p>
                    ${imagesLinks[0] ? 
                        `<div class="adjustw">
                            <img src="${imgdburl}${imagesLinks[0].url}" alt="Image">
                        </div>` 
                        : ''
                    }
                </div>
            </div>

            <div style="padding: 20px 0;">
                <h4>Thanks for your customisation request!</h4>
                <p>We will get back to you shortly.</p>
            </div>

           

            <div class="footer">
                <p>© Tiny Tiaraa</p>
            </div>
        </div>
    </body>
</html>
            `;

            try {
                await customordermail({
                    email: email,
                    subject: "Custom Order Confirmation mail",
                    html: customhtmlContent,
                     cc: "orders@tinytiaraa.com"

                })


            } catch (error) {
                return next(new ErrorHandler(error.message, 500));

            }


            // Send a success response
            res.status(201).json({
                success: true,
                message: "Customisation request submitted successfully!",
                customisation,
            });
        } catch (error) {
            // Handle errors
            return next(new ErrorHandler(error.message || "Internal Server Error", 500));
        }
    })
);


router.get("/all/requests", catchAsyncErrors(async (req, res, next) => {
    try {
        const customisationRequests = await Customisation.find().sort({ CreatedAt: -1 });

        res.status(200).json({
            success: true,
            customisationRequests,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
}));



router.get("/request/:id", catchAsyncErrors(async (req, res, next) => {
    try {
        // Extract the ID from the request parameters
        const { id } = req.params;

        // Fetch the customisation request from the database
        const customisationRequest = await Customisation.findById(id);

        // Check if the request exists
        if (!customisationRequest) {
            return res.status(404).json({
                success: false,
                message: 'Customisation request not found',
            });
        }

        // Send the customisation request data back to the client
        res.status(200).json({
            success: true,
            customisationRequest,
        });
    } catch (error) {
        console.error('Error fetching customisation request:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }

}));


// Export the router
module.exports = router;