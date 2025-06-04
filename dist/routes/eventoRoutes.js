"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoController_1 = require("../controllers/eventoController");
const router = (0, express_1.Router)();
router.get("/eventomanana", eventoController_1.getEventos);
exports.default = router;
