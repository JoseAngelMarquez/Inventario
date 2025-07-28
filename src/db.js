import mongoose from "mongoose";

// función para conectar a la base de datos MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("MongoDB fallo al conectrse:", error.message);
        process.exit(1); // salir del proceso con error
    }
}