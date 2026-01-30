"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.registerValidator = void 0;
const express_validator_1 = require("express-validator");
exports.registerValidator = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Valid email is required"),
    (0, express_validator_1.body)("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
    (0, express_validator_1.body)("firstName")
        .isLength({ min: 2 })
        .withMessage("First name must be at least 2 characters"),
    (0, express_validator_1.body)("lastName")
        .isLength({ min: 2 })
        .withMessage("Last name must be at least 2 characters"),
];
exports.loginValidator = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Valid email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
];
//# sourceMappingURL=authValidators.js.map