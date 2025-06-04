import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcryptjs';
import { IParticipante } from '../types/user.types';

class Participante extends Model<IParticipante> implements IParticipante {
  public id!: number;
  public nombre!: string;
  public correo!: string;
  public password!: string;
}

Participante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Participante',
    tableName: 'participante',
    timestamps: false,
    hooks: {
      beforeCreate: async (participante: Participante) => {
        if (participante.password) {
          const salt = await bcrypt.genSalt(10);
          participante.password = await bcrypt.hash(participante.password, salt);
        }
      }
    }
  }
);

export default Participante;