import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000, // 30s timeout
      socketTimeoutMS: 45000          // 45s socket timeout
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    // retry after 5s
    setTimeout(connectDB, 5000);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err.message);
});

export default connectDB;
