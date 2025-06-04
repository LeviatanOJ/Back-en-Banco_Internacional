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
exports.getEventos = void 0;
const EventoManana_1 = __importDefault(require("../models/EventoManana"));
const Ciudad_1 = __importDefault(require("../models/Ciudad"));
const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventos = yield EventoManana_1.default.findAll({
            include: [
                {
                    model: Ciudad_1.default,
                    as: "Ciudad",
                    attributes: ["provincia"],
                    required: true,
                },
            ],
        });
        const resultado = eventos.map((evento) => {
            var _a;
            const json = evento.toJSON();
            return Object.assign(Object.assign({}, json), { ciudad: (_a = json.Ciudad) === null || _a === void 0 ? void 0 : _a.provincia, ciudad_id: undefined, Ciudad: undefined });
        });
        res.json(resultado);
    }
    catch (error) {
        console.error("Error al obtener los eventos:", error);
        res.status(500).json({ error: "Error al obtener los eventos" });
    }
});
exports.getEventos = getEventos;
