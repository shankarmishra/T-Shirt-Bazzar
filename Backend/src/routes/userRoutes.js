import express from "express";
import { registerUser, loginUser, getUserProfile, updateUserProfile, logoutUser } from "../controllers/userController.js";
import { authMiddleware, validateRequest } from "../middlewares/authMiddleware.js";  // ✅ Import from middleware

const router = express.Router();

router.post("/register", validateRequest, registerUser);
router.post("/login", validateRequest, loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, validateRequest, updateUserProfile);
router.post("/logout", logoutUser);

export default router;
