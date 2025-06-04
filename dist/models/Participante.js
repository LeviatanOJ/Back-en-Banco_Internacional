"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Participante extends sequelize_1.Model {
}
Participante.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    correo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize: database_1.default,
    modelName: 'Participante',
    tableName: 'participante',
    timestamps: false,
    hooks: {
        beforeCreate: (participante) => __awaiter(void 0, void 0, void 0, function* () {
            if (participante.password) {
                const salt = yield bcryptjs_1.default.genSalt(10);
                participante.password = yield bcryptjs_1.default.hash(participante.password, salt);
            }
        })
    }
});
exports.default = Participante;
