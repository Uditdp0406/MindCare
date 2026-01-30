"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authValidators_1 = require("../validators/authValidators");
const validateRequest_1 = require("../middleware/validateRequest");
const router = (0, express_1.Router)();
router.post("/register", authValidators_1.registerValidator, validateRequest_1.validateRequest, authController_1.register);
router.post("/login", authValidators_1.loginValidator, validateRequest_1.validateRequest, authController_1.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map