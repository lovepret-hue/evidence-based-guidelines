import express from "express";
import { login, logout,me} from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// All routes BELOW this line require authentication





router.post("/login", login);
router.use(authenticateToken); // Middleware starts here
router.post("/logout", logout);
router.get("/me", me);

export default router;