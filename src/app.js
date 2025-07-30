// src/app.js
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js"; // Importamos las rutas de autenticación

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use('/api',authRoutes); // o app.use("/api", authRoutes);

export default app;
