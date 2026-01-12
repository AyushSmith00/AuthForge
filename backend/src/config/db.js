import mongoose from "mongoose"

const connect_DB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Database is connected")
        
    } catch (error) {
        console.log("Database connection error:", error.message);
        process.exit(1);
    }
};

export default connect_DB