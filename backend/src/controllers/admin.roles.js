import User from "../models/User.js";

export const choose_roles = async(req , res) => {
    try {

        const {id} = req.params;

        const {role} = req.body;

        if(req.user._id.toString() == id){
            return res.status(403).json({message: "Admin cannot update their roles"})
        }

        const allowedRoles = ["user", "admin"];

        if(!role || allowedRoles.includes(role)){
            return res.status(400).json({message: "Invalid role"});
        }

        const user = User.findById(id).select("-password, -refreshToken")

        if(!user){
            return res.status(404).json({message: "user not found"})
        }

        user.role = role;
        await user.save()

        return res.status(200).json({
            message: `user role updated to ${role}`,
            user: {
                id: user._id,
                role: user.role,
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "failed to logout user",
            error: error.message
        })
        
    }
}