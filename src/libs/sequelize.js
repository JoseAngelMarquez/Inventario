// src/libs/sequelize.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a MySQL");
    await sequelize.sync({ force: false }); // Crea tablas si no existen
    console.log("Tablas sincronizadas");
  } catch (error) {
    console.error("Error al conectar a la BD:", error);
  }
};
