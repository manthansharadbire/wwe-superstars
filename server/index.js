import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import {getWweSuperstar,postWweSuperstar,getWweSuperstarById ,deleteWwesuperstarById} from './controllers/wwe-superstars.js'
import { health } from './controllers/health.js';

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("MongoDB connection successfull")
    }
}

app.get("/health", health);

app.get("/wwe-superstars/:id",getWweSuperstarById);

app.delete("/wwe-superstars/:id", deleteWwesuperstarById);

app.get("/wwe-superstars",getWweSuperstar );

app.post("/wwe-superstars",postWweSuperstar)

const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    connectDB();
});