import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js'
import authRoutes from './Routes/auth.route.js'

dotenv.config();


const app=express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to Database")
});
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is Running!")
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})