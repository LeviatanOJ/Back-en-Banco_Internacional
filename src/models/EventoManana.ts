import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Ciudad from "./Ciudad";

class EventoManana extends Model {}

EventoManana.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ciudad_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "EventoManana",
    tableName: "eventomanana",
    timestamps: false,
  }
);

EventoManana.belongsTo(Ciudad, {
  foreignKey: "ciudad_id",
  as: "Ciudad",
});

export default EventoManana;
