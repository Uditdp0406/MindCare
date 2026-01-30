"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const journalController_1 = require("../controllers/journalController");
const journalValidators_1 = require("../validators/journalValidators");
const validateRequest_1 = require("../middleware/validateRequest");
const router = (0, express_1.Router)();
router.post("/add", authMiddleware_1.authMiddleware, journalValidators_1.addJournalValidator, validateRequest_1.validateRequest, journalController_1.addJournal);
router.get("/list", authMiddleware_1.authMiddleware, journalValidators_1.listJournalValidator, validateRequest_1.validateRequest, journalController_1.listJournals);
router.get("/today", authMiddleware_1.authMiddleware, journalController_1.getTodayJournal);
exports.default = router;
//# sourceMappingURL=journalRoutes.js.map