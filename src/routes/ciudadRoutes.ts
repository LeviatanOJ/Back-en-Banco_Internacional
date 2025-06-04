import { Router } from "express";
import { getCiudades } from "../controllers/ciudadController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/ciudades", getCiudades);

export default router;
