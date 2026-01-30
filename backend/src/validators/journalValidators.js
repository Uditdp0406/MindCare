"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listJournalValidator = exports.addJournalValidator = void 0;
const express_validator_1 = require("express-validator");
exports.addJournalValidator = [
    (0, express_validator_1.body)("moodScore")
        .isInt({ min: 1, max: 10 })
        .withMessage("Mood score must be between 1 and 10"),
    (0, express_validator_1.body)("text").notEmpty().withMessage("Text is required"),
];
exports.listJournalValidator = [
    (0, express_validator_1.query)("from").optional().isISO8601().withMessage("from must be a valid date"),
    (0, express_validator_1.query)("to").optional().isISO8601().withMessage("to must be a valid date"),
];
//# sourceMappingURL=journalValidators.js.map