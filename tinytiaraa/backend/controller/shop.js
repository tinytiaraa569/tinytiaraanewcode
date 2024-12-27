const express = require('express')
const path = require('path')
const router = express.Router()
const fs = require('fs')
const jwt = require('jsonwebtoken')
const sendMail = require('../utils/sendMail')
const Shop = require('../model/shop')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/Errorhandler')
const sendToken = require('../utils/jwtToken')
const { upload } = require('../multer')
const sendShopToken = require('../utils/shopToken')
const { isSeller } = require('../middleware/auth')


router.post("/create-shop", upload.single("file"), async (req, res, next) => {
    try {
        const { email } = req.body;

        const sellerEmail = await Shop.findOne({ email })

        if (sellerEmail) {
            //     const filename = req.file.filename
            //     const filePath = `uploads/${filename}`
            //     fs.unlink(filePath, (err) => {
            //         if (err) {
            //             console.log(err)
            //             res.status(500).json({
            //                 message: "Error while deleteing file"
            //             })
            //         }

            //     })
            return next(new ErrorHandler("User already Exists", 400))
        }
        // const filename = req.file.filename;
        // const fileUrl = path.join(filename)


        const seller = {
            name: req.body.name,
            email: email,
            password: req.body.password,
            // avatar: fileUrl,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            // zipCode:req.body.zipCode,

        }

        const activationToken = createActivationToken(seller)
        const activationUrl = `https://www.tinytiaraa.com/seller/activation/${activationToken}`
        try {
            await sendMail({
                email: seller.email,
                subject: "Activate your shop Account",
                message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`
            })
            res.status(201).json({
                success: true,
                message: `please check your email:- ${seller.email} to activate your account!`,
            });

        } catch (error) {
            return next(new ErrorHandler(error.message, 500));

        }




    } catch (error) {
        return next(new ErrorHandler(error.message, 400));

    }

})



const createActivationToken = (seller) => {
    return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m"
    })

}



//activation shop

router.post("/activation", catchAsyncErrors(async (req, res, next) => {
    try {
        const { activation_token } = req.body;
        const newSeller = jwt.verify(
            activation_token,
            process.env.ACTIVATION_SECRET
        );
        if (!newSeller) {
            return next(new ErrorHandler("Invalid token", 400));

        }
        const { name, email, password, phoneNumber, address } = newSeller;
        // zipCode , avatar

        let seller = await Shop.findOne({ email });
        if (seller) {
            return next(new ErrorHandler("User already exists", 400));
        }
        seller = await Shop.create({
            name,
            email,
            password,
            phoneNumber,
            address,
            // zipCode,
            // avatar


        });
        sendShopToken(seller, 201, res)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
}))


//login shop


router.post("/login-shop", catchAsyncErrors(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandler("Please provide the all fields", 400));

        }
        const user = await Shop.findOne({ email }).select("+password")

        if (!user) {
            return next(new ErrorHandler("User doesn't exists", 400));

        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return next(
                new ErrorHandler("Please provide the correct information", 400)
            );
        }
        sendShopToken(user, 201, res)


    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
}))



// load shop products 

router.get(
    "/getSeller",
    isSeller,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const seller = await Shop.findById(req.seller._id);

            if (!seller) {
                return next(new ErrorHandler("User doesn't exists", 400));
            }

            res.status(200).json({
                success: true,
                seller,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);



//logout 


router.get("/logout", catchAsyncErrors(async (req, res, next) => {
    try {
        res.cookie("seller_token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,

        });
        res.status(201).json({
            success: true,
            message: "Log out successful!",
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));

    }
}))



//   update seller informatiom

router.put("/update-seller-info", isSeller, catchAsyncErrors(async (req, res, next) => {
    try {
        const { name, email, phoneNumber } = req.body;
        const shop = await Shop.findOne(req.seller._id);

        if (!shop) {
            return next(new ErrorHandler("User not found", 400));
        }

        
        shop.name = name;
        shop.email = email;
        shop.phoneNumber = phoneNumber;

        await shop.save();

        res.status(201).json({
            success: true,
            shop,
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))


// get shop info
router.get(
    "/get-shop-info/:id",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const shop = await Shop.findById(req.params.id);
        res.status(201).json({
          success: true,
          shop,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  




module.exports = router