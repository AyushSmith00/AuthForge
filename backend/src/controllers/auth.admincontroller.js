import User from "../models/User.js";

export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find().select("-password -refreshToken");

        res.status(200).json({
            count: users.length,
            users
        })
        
    } catch (error) {
        res.status(500).json({
            message: "failed to fetch users",
            error: error.message
        })
    }
}
