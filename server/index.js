import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = ()=>{
    const conn = mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("MongoDB connection successfull")
    }
}

const WWE_SUPERSTARS = []

app.get("/health", (req,res)=>{
    res.status(200).json({meassage:"Server is Healthy !"})
});

app.get("/wwe-superstars", (req,res)=>{
    return res.status(200).json({
        success:true,
        data:WWE_SUPERSTARS,
        message:"WWE Superstar fetched successfully"
    })
});

app.post("/wwe-superstars",(req,res)=>{
    return res.status(201).json({
        success:true,
        data:WWE_SUPERSTARS,
        message:"WWE Superstar created successfully"
    })
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    connectDB();
});