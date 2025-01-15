const mongoose  =require('mongoose')


const ChatbotSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    phoneNumber:{
        type:String,
       
    },
    productQuery:{
        type:String,
        
    },
    feedback:{
        type:String,
        
    },
    otherQuery:{
        type:String,
        
    },
      CreatedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Chatbot",ChatbotSchema)