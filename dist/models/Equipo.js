"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Ciudad_1 = __importDefault(require("./Ciudad"));
const Categoria_1 = __importDefault(require("../models/Categoria"));
const Equipo = database_1.default.define("Equipo", {
    nombre: sequelize_1.DataTypes.STRING,
    categoria_id: sequelize_1.DataTypes.INTEGER,
    ciudad_id: sequelize_1.DataTypes.INTEGER,
    fecha_inscripcion: sequelize_1.DataTypes.DATE,
}, {
    tableName: "equipo",
    timestamps: false,
});
Equipo.belongsTo(Ciudad_1.default, { foreignKey: "ciudad_id", as: "Ciudad" });
Equipo.belongsTo(Categoria_1.default, { foreignKey: "categoria_id", as: "Categoria" });
exports.default = Equipo;
