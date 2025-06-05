import { Router } from "express";
import {
  inscribirClub,
  getParticipaciones,
} from "../controllers/participacionController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/inscribirclub", inscribirClub);
router.get("/inscritosclub", getParticipaciones);

export default router;
