const app = require("./app")
const connectDatabase = require("./db/Database")
const cloudinary = require("cloudinary");



process.on("uncaughtException" , (err)=>{
    console.log(`Error message ${err.message}`)
    console.log(`Shutting down the server uncaught exception`)

})


// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"config/.env"
    })
}

//connection db
connectDatabase()   
// --- previous

// for dummy data base 

// const databaseName = process.env.NODE_ENV === "DEVELOPMENT" ? "dummy" : "test";

// // Connect to the database
// connectDatabase(databaseName);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })
  
//create sever

const server = app.listen(process.env.PORT , ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})


process.on("unhandledRejection",(err)=>{
    console.log(`shutting down the server for ${err.message}`)
    console.log(`shutting down the server for unhandle promise rejection`)

    server.close(()=>{
        process.exit(1)
    });
})
