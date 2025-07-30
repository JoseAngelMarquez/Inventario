// src/libs/createAdmin.js
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function createAdmin() {
  const admin = await User.findOne({ where: { role: "admin" } });

  if (!admin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      username: "admin",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin creado con éxito");
  } else {
    console.log("ℹ️ Admin ya existe");
  }
}
