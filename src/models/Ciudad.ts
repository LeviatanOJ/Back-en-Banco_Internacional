import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Ciudad extends Model {}

Ciudad.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  provincia: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Ciudad',
  tableName: 'ciudad',
  timestamps: false,
});

export default Ciudad;