import { Model, DataTypes } from 'sequelize';
import database from '../config/database';

const Categoria = database.define('Categoria', {
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
  tableName: 'categoria'
});

export default Categoria;