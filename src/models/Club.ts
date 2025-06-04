import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Ciudad from "./Ciudad";
import Modalidad from "./Modalidad";

class Club extends Model {}

Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    modalidad_id: {
      type: DataTypes.INTEGER,
    },
    lugar: {
      type: DataTypes.STRING,
    },
    dias: {
      type: DataTypes.STRING,
    },
    horario: {
      type: DataTypes.STRING,
    },
    ciudad_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Club",
    tableName: "club",
    timestamps: false,
  }
);

Club.belongsTo(Ciudad, {
  foreignKey: "ciudad_id",
  as: "Ciudad",
});

Club.belongsTo(Modalidad, {
  foreignKey: "modalidad_id",
  as: "Modalidad",
});

export default Club;
