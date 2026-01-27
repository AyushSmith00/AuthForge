import User from "../models/User.js";

export const logoutUser = async(req, res) => {
    const {refreshToken} = req.body;

    if(!refreshToken)
        return res.status(400).json({message: "Refresh Token expired for logout"})

    try {
        const user = await User.findOne({refreshToken});
        if(user) {
            user.refreshToken = "";
            await user.save();
        }

        res.status(200).json({message: "Logged out successfully"});
        
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};