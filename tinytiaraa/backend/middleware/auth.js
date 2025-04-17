const ErrorHandler = require("../utils/Errorhandler")

const jwt = require('jsonwebtoken')

const catchAsyncErrors = require('./catchAsyncErrors')
const User = require('../model/user');
const shop = require("../model/shop");
const SalesUser = require("../model/salesUserModel");

exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});



exports.isSeller = catchAsyncErrors(async(req,res,next) => {
    const {seller_token} = req.cookies;

    if(!seller_token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);

    req.seller = await shop.findById(decoded.id);

    next();
});


exports.isSalesUser = catchAsyncErrors(async (req, res, next) => {
    const { sales_token } = req.cookies;  // Expecting `sales_token` from cookies

    if (!sales_token) {
        return next(new ErrorHandler("Please login as a Sales User to continue", 401));
    }

    const decoded = jwt.verify(sales_token, process.env.JWT_SECRET_KEY);
    req.salesUser = await SalesUser.findById(decoded.id);

    if (!req.salesUser) {
        return next(new ErrorHandler("Sales User not found", 404));
    }

    next();
});
