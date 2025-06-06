import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import sequelize from "./config/database";
import cityRoutes from "./routes/ciudadRoutes";
import clubRoutes from "./routes/clubRoutes";
import eventoRoutes from "./routes/eventoRoutes";
import equipoRoutes from "./routes/equipoRoutes";
import ParticipacionClub from "./routes/participacionRoutes";
import participacionMananaRoutes from "./routes/participacionMananaRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api", cityRoutes);
app.use("/api", clubRoutes);
app.use("/api", eventoRoutes);
app.use("/api", equipoRoutes);
app.use("/api", ParticipacionClub);
app.use("/api", participacionMananaRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Error al conectar con la base de datos:", error);
  });
