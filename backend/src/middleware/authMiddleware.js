"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const jwtService_1 = require("../services/jwtService");
async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: Missing token" });
        }
        const token = authHeader.split(" ")[1];
        // Verify token
        const decoded = (0, jwtService_1.verifyJwt)(token);
        // Find user in database
        const user = await user_1.default.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }
        // Attach user to request
        req.user = user;
        next();
    }
    catch (err) {
        console.error("Auth error:", err);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}
//# sourceMappingURL=authMiddleware.js.map