import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import 'dotenv/config'

//login user
export const loginUser = async(req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            res.json({success:false, message:"User Doesn't Exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.json({success:false, message:"Invalid  Credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true, token})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//register user
export const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        //checking if account already present
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:'User Already Exists'})
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:'Please Enter A Valid Email'});
        }
        //if pwd < 8 digits, response will be given
        if (password.length < 8) {
            return res.json({success:false, message:'Please Enter A Strong Password'});
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })

        const user = await newUser.save() //user saved in database
        const token  = createToken(user._id);
        res.json({success:true, token});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}