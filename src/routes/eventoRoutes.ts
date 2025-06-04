import { Router } from "express";
import { getEventos } from "../controllers/eventoController";
import { verifyToken } from "../middleware/authMiddleware";
const router = Router();

router.get("/eventomanana", getEventos);

export default router;
