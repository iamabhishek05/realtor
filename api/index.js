import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

dotenv.config();


mongoose.connect(process.env.DB_URI)
.then( () =>{
    console.log ( "Connected to MongoDb successfully" );
})
.catch((error) => {
    console.log( "Error connecting to MongoDB" , error);
});

const app = express();

app.use(express.json());



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

app.use('/api/auth',authRouter);


// Error handling middleware
// This middleware will catch any errors thrown in the routes
// and send a response with the error message and status code
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
    })
})