import User from "../models/User.js";

export const deleteUser = async(req, res) => {
    try {
        const {id} = req.params;

        if(req.user._id.toString() == id){
            return res.status(400).json({message: "Admin cannot delete himself"});
        }

        const user = User.findById(id);

        if(!user){
            return res.status(404).json({message: "user not found"})
        }

        await user.deleteOne();

        res.status(200).json({message: "user deleted successfully"});

    } catch (error) {
        res.status(500).json({
            message: "failed to delete user",
            error: error.message
        })
        
    }
}