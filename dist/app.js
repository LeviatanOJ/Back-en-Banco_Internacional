"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const database_1 = __importDefault(require("./config/database"));
const ciudadRoutes_1 = __importDefault(require("./routes/ciudadRoutes"));
const clubRoutes_1 = __importDefault(require("./routes/clubRoutes"));
const eventoRoutes_1 = __importDefault(require("./routes/eventoRoutes"));
const equipoRoutes_1 = __importDefault(require("./routes/equipoRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/auth", authRoutes_1.default);
app.use("/api", ciudadRoutes_1.default);
app.use("/api", clubRoutes_1.default);
app.use("/api", eventoRoutes_1.default);
app.use("/api", equipoRoutes_1.default);
database_1.default
    .sync()
    .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
});
