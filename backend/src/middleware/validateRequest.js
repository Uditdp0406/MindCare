"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = validateRequest;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
function validateRequest(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array().map((err) => ({
                field: err.path ?? err.param ?? "unknown",
                message: err.msg,
            })),
        });
    }
    next();
}
//# sourceMappingURL=validateRequest.js.map