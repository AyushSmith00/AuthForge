import User from "../models/User.js";

export const forceLogout = async(req , res) => {
    try {
        const {id} = req.params;

        const logoutUser = await User.findById(id).select("-password");

        if(!logoutUser){
            return res.status(404).json({message: "User not found"});
        }

        logoutUser.refreshToken = "";
        logoutUser.save()

        res.status(200).json({message: "user logged out successfully"})
        
    } catch (error) {
        res.status(500).json({
            message: "failed to logout user",
            error: error.message
        })
    }
};
