"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipoController_1 = require("../controllers/equipoController");
const router = (0, express_1.Router)();
router.get("/equipos", equipoController_1.getEquipos);
exports.default = router;
