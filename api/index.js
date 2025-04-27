import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URI)
.then( () =>{
    console.log ( "Connected to MongoDb successfully" );
})
.catch((error) => {
    console.log( "Error connecting to MongoDB" , error);
});

const app = express();



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})