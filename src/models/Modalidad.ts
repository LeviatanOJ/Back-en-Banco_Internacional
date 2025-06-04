import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Modalidad extends Model {
  public id!: number;
  public nombre!: string;
}

Modalidad.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Modalidad",
    tableName: "modalidad",
    timestamps: false,
  }
);

export default Modalidad;
