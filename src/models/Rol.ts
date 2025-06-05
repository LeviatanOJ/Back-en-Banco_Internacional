import { Model, DataTypes } from 'sequelize';
import database from '../config/database';

const Rol = database.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  }
}, {
  tableName: 'rol'
});

export default Rol;