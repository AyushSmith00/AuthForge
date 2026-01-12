import bcrypt from "bcrypt";;
import User from "../models/User.js";

export const register_user = async(req, res) => {
    try {

        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required" });
        }

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(409).json({message: "The email already exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashpassword,
        });

        res.status(201).json({
            message: "Registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });


    } catch (error) {
        console.error("register error: ", error);
        res.status(500).json({message: "Server Error"});
        
    }
}


