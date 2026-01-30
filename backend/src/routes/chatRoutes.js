"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const chatController_1 = require("../controllers/chatController");
const router = (0, express_1.Router)();
router.post("/send", authMiddleware_1.authMiddleware, chatController_1.sendMessage);
exports.default = router;
//# sourceMappingURL=chatRoutes.js.map