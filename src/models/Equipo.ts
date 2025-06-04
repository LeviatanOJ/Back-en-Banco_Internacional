import { Model, DataTypes } from "sequelize";
import database from "../config/database";
import Ciudad from "./Ciudad";
import Categoria from "../models/Categoria";

const Equipo = database.define(
  "Equipo",
  {
    nombre: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
    ciudad_id: DataTypes.INTEGER,
    fecha_inscripcion: DataTypes.DATE,
  },
  {
    tableName: "equipo",
    timestamps: false,
  }
);

Equipo.belongsTo(Ciudad, { foreignKey: "ciudad_id", as: "Ciudad" });
Equipo.belongsTo(Categoria, { foreignKey: "categoria_id", as: "Categoria" });

export default Equipo;
