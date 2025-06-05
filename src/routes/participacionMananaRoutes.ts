import { Router } from "express";
import {
  inscribirEvento,
  getParticipaciones,
} from "../controllers/participacionMananaController";

const router = Router();

router.post("/inscribirEvento", inscribirEvento);
router.get("/participacionesEvento", getParticipaciones);

export default router;
