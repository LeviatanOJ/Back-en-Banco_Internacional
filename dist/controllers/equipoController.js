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
exports.getEquipos = void 0;
const Equipo_1 = __importDefault(require("../models/Equipo"));
const Ciudad_1 = __importDefault(require("../models/Ciudad"));
const Categoria_1 = __importDefault(require("../models/Categoria"));
const getEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipos = yield Equipo_1.default.findAll({
            include: [
                { model: Ciudad_1.default, as: "Ciudad", attributes: ["provincia", "capital"] },
                { model: Categoria_1.default, as: "Categoria", attributes: ["nombre"] },
            ],
        });
        res.json(equipos);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los equipos" });
    }
});
exports.getEquipos = getEquipos;
