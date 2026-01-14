import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login_user = async(req, res) => {
    try {

        const{email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Email and Password is required"});
        }

        const user = await User.findOne({email}).select("+password");

        if(!user){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        res.status(200).json({
            message: "Login successfully",
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
            },
        });


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}