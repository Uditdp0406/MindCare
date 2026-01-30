import { Router } from "express";
import { register, login } from "../controllers/authController";
import { registerValidator, loginValidator } from "../validators/authValidators";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.post("/register", registerValidator, validateRequest, register as any);
router.post("/login", loginValidator, validateRequest, login as any);

export default router;
