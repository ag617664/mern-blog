import User from '../Models/user.model.js'
import bcryptjs from 'bcryptjs';
import { nextTick } from 'process';

export const signup=async(req,res,next)=>{
    const {user,email,password}=req.body;

    if(!username || !email || !password || username==='' || email ==='' || password===''){
        next(errorHandler(400,'All fields are required'));
        
        // return res.status(400).json({message:"All Fields are requires"});
    }
    const hashedPassword=bcryptjs.hashSync(password,10);

    const newUser=new User({
        username,
        email,
        password:hashedPassword
    });

    try{
        await newUser.save();
        res.json('SignUp Successful');
    }catch(error){
        next(error);
    }

}