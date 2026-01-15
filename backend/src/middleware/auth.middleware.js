import jwt from "jsonwebtoken"
import User from "../models/User.js"

const protect = async(req, res, next) => {
    let token;

    if(req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(" ")[1];

            const decode = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findOne(decode.id).select("-password");

            return next();

            
        } catch (error) {
            res.status(401);
            return next(new Error("Not authorized, token failed"));
            
        }
    }
    res.status(401);
    next(new Error("Not authorized, no token"));
}

export default protect