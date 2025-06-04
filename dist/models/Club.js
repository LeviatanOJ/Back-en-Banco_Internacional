"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Ciudad_1 = __importDefault(require("./Ciudad"));
const Modalidad_1 = __importDefault(require("./Modalidad"));
class Club extends sequelize_1.Model {
}
Club.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    modalidad_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    lugar: {
        type: sequelize_1.DataTypes.STRING,
    },
    dias: {
        type: sequelize_1.DataTypes.STRING,
    },
    horario: {
        type: sequelize_1.DataTypes.STRING,
    },
    ciudad_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: database_1.default,
    modelName: "Club",
    tableName: "club",
    timestamps: false,
});
Club.belongsTo(Ciudad_1.default, {
    foreignKey: "ciudad_id",
    as: "Ciudad",
});
Club.belongsTo(Modalidad_1.default, {
    foreignKey: "modalidad_id",
    as: "Modalidad",
});
exports.default = Club;
