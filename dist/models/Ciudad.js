"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Ciudad extends sequelize_1.Model {
}
Ciudad.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    provincia: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    capital: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Ciudad',
    tableName: 'ciudad',
    timestamps: false,
});
exports.default = Ciudad;
