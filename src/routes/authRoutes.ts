import { Router } from "express";
import { register, login } from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";
const router = Router();

router.post("/register", verifyToken, register);
router.post("/login", login);

export default router;
