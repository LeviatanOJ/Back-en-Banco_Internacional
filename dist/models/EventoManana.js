"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Ciudad_1 = __importDefault(require("./Ciudad"));
class EventoManana extends sequelize_1.Model {
}
EventoManana.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ciudad_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    sequelize: database_1.default,
    modelName: "EventoManana",
    tableName: "eventomanana",
    timestamps: false,
});
EventoManana.belongsTo(Ciudad_1.default, {
    foreignKey: "ciudad_id",
    as: "Ciudad",
});
exports.default = EventoManana;
