import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.routes.js'

dotenv.config();


const app=express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to Database")
});

app.listen(3000,()=>{
    console.log("server is Running!")
});

app.use('/api/user',userRoutes);