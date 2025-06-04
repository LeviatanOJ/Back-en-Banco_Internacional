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
exports.login = exports.register = void 0;
const Participante_1 = __importDefault(require("../models/Participante"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, correo, password } = req.body;
        const participante = yield Participante_1.default.create({
            nombre,
            correo,
            password,
        });
        const token = jsonwebtoken_1.default.sign({ id: participante.id }, process.env.JWT_SECRET, {
            expiresIn: "30m",
        });
        const participanteResponse = {
            id: participante.id,
            nombre: participante.nombre,
            correo: participante.correo,
        };
        res.status(201).json({
            status: "success",
            token,
            data: { participante: participanteResponse },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error instanceof Error ? error.message : "Ha ocurrido un error",
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { correo, password } = req.body;
        const participante = yield Participante_1.default.findOne({ where: { correo } });
        if (!participante ||
            !(yield bcryptjs_1.default.compare(password, participante.password))) {
            res.status(401).json({
                status: "fail",
                message: "Correo o contraseña incorrectos",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: participante.id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        const participanteResponse = {
            id: participante.id,
            nombre: participante.nombre,
            correo: participante.correo,
        };
        res.status(200).json({
            status: "success",
            token,
            data: { participante: participanteResponse },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error instanceof Error ? error.message : "Ha ocurrido un error",
        });
    }
});
exports.login = login;
