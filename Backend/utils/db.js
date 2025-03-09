import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb conected successfully');
    } catch (error) {
        console.log("Error connecting to mongodb: ", error);
    }
}

export default connectDB;