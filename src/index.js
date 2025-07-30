// src/index.js
// src/index.js
import app from "./app.js";
import { connectDB, sequelize } from "./libs/sequelize.js"; // importante importar sequelize
import { createAdmin } from "./libs/createAdmin.js";

const PORT = process.env.PORT || 3000;

const main = async () => {
  await connectDB(); // primero conecta
  await createAdmin(); // crea admin si no existe
  await sequelize.sync({ alter: true }); // luego sincroniza modelos con tablas (ajusta sin borrar)

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
};

main();


