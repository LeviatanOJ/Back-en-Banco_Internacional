import { Router } from "express";
import { getClubes } from "../controllers/clubController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/clubes", getClubes);

export default router;
