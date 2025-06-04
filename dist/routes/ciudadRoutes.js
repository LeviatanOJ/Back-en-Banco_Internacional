"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ciudadController_1 = require("../controllers/ciudadController");
const router = (0, express_1.Router)();
router.get("/ciudades", ciudadController_1.getCiudades);
exports.default = router;
