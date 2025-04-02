import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import WweSuperstar from './models/WweSuperstar.js'

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("MongoDB connection successfull")
    }
}

app.get("/health", (req,res)=>{
    res.status(200).json({meassage:"Server is Healthy !"})
});

app.get("/wwe-superstars", (req,res)=>{

    const WweSuperstar = WweSuperstar.find();
    return res.status(200).json({
        success:true,
        data:WweSuperstar,
        message:"WWE Superstar fetched successfully"
    })
});

app.post("/wwe-superstars",async(req,res)=>{

    const {wwename, height, finisher, aka, thumbnail} = req.body;

    const newWweSuperstar = new WweSuperstar({
        wwename, height, finisher, aka, thumbnail
    });

    const savedWweSuperstars = await newWweSuperstar.save();
    
    return res.status(201).json({
        success:true,
        data:savedWweSuperstars,
        message:"WWE Superstar created successfully"
    })
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    connectDB();
});