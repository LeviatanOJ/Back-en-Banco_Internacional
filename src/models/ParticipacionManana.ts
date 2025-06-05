import { Model, DataTypes } from "sequelize";
import database from "../config/database";
import Participante from "./Participante";
import Evento from "./EventoManana"; // Asegúrate de tener el modelo Evento

const ParticipacionManana = database.define(
  "ParticipacionManana",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    participante_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Participante,
        key: "id",
      },
    },
    evento_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Evento,
        key: "id",
      },
    },
  },
  {
    tableName: "participacionmanana",
    timestamps: false,
  }
);

export default ParticipacionManana;
