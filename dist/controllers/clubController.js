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
exports.getClubes = void 0;
const Club_1 = __importDefault(require("../models/Club"));
const Ciudad_1 = __importDefault(require("../models/Ciudad"));
const Modalidad_1 = __importDefault(require("../models/Modalidad"));
const getClubes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clubes = yield Club_1.default.findAll({
            include: [
                {
                    model: Ciudad_1.default,
                    as: "Ciudad",
                    attributes: ["provincia"],
                    required: true,
                },
                {
                    model: Modalidad_1.default,
                    as: "Modalidad",
                    attributes: ["nombre"],
                    required: true,
                },
            ],
        });
        const resultado = clubes.map((club) => {
            var _a, _b;
            const json = club.toJSON();
            return Object.assign(Object.assign({}, json), { ciudad: (_a = json.Ciudad) === null || _a === void 0 ? void 0 : _a.provincia, modalidad: (_b = json.Modalidad) === null || _b === void 0 ? void 0 : _b.nombre, ciudad_id: undefined, modalidad_id: undefined, Ciudad: undefined, Modalidad: undefined });
        });
        res.json(resultado);
    }
    catch (error) {
        console.error("Error al obtener los clubes:", error);
        res.status(500).json({ error: "Error al obtener los clubes" });
    }
});
exports.getClubes = getClubes;
