import User from "../models/User.js";

export const getAllUsers = async(req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const safePage = page < 1 ? 1: page
    const safeLimit = limit > 50 ? 50: limit

    const skip = (safePage - 1) * safeLimit;

    const filter = {};

    if(req.query.role) {
        filter.role = req.query.role;
    }

    if(req.query.keyword) {
        filter.$or = [
            { name: { $regex: req.query.keyword, $options: "i" } },
            { email: { $regex: req.query.keyword, $options: "i" } },
        ]
    }

    const users = await User.find(filter)
    .select("-password -refreshToken")
    .sort({ createdAt: -1})
    .skip(skip)
    .limit(safeLimit)

    const totalUsers = await User.countDocuments(filter);
    
    res.status(200).json({
        page: safePage,
        limit: safeLimit,
        totalUsers,
        totalPages: Math.ceil(totalUsers/ safeLimit),
        users
    })
}
