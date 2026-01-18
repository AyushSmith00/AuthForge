export const logoutUser = async(req, res) => {
    try {
        res.status(200).json({
            message: "Logged Out Successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Logout Failed"
        });
    };
};