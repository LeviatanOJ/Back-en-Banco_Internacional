import { Model, DataTypes } from "sequelize";
import database from "../config/database";
import Participante from "./Participante";
import Club from "./Club";

const ParticipacionClub = database.define(
  "ParticipacionClub",
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
    club_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Club,
        key: "id",
      },
    },
    rol_id: DataTypes.INTEGER,
  },
  {
    tableName: "participacionclub",
    timestamps: false,
  }
);

export default ParticipacionClub;
