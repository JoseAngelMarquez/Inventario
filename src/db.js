import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("MongoDB fallo al conectarse:", error.message);
    process.exit(1);
  }
};
