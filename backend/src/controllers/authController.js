"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const jwtService_1 = require("../services/jwtService");
async function register(req, res) {
    try {
        const { email, password, firstName, lastName } = req.body;
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({
                message: "email, password, firstName, lastName are required",
            });
        }
        const existing = await user_1.default.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Email already in use" });
        }
        const user = new user_1.default({
            email,
            password,
            firstName,
            lastName,
        });
        await user.save();
        const token = (0, jwtService_1.signJwt)({ id: user._id, email: user.email });
        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
    }
    catch (err) {
        console.error("Register error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "email and password are required" });
        }
        const user = await user_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = (0, jwtService_1.signJwt)({ id: user._id, email: user.email });
        return res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
    }
    catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
//# sourceMappingURL=authController.js.map