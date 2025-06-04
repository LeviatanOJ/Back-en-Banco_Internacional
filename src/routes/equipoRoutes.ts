import { Router } from "express";
import { getEquipos } from "../controllers/equipoController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/equipos", getEquipos);

export default router;
