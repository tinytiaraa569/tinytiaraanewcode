const mongoose  =require('mongoose')


const coupounCodeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true ,'Please Enter CoupounCode Name'],
        unique:true
    },
    value:{
        type:Number,
        default: null // For fixed value discounts

    },
    percentageDiscount: {
        type: Number,
        default: null // For percentage discounts (e.g., 10 for 10%)
    },
    minAmount:{
        type:Number,

    },
    maxAmount:{
        type:Number,

    },
    shop:{
        type:String,
        required:true


    },
    // shopId:{
    //     type: String,
    //     required: true,
    //    },

    selectedProducts :{
        type:String,


    },
    startDate: {
        type: Date, // Add the startDate field
        default: null // Default can be null, or you can set it to a specific date
    },
    endDate: {
        type: Date, // Add the startDate field
        default: null // Default can be null, or you can set it to a specific date
    },
    live: {
        type: Boolean,
        default: true, // Default value for live status
    },

      CreatedAt:{
        type:Date,
        default:Date.now
    },
    
})

module.exports = mongoose.model("CoupounCode",coupounCodeSchema)