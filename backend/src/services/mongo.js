"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = connectMongo;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectMongo() {
    const host = process.env.MONGO_DEV_HOST || "localhost";
    const port = process.env.MONGO_DEV_PORT || "27017";
    const dbName = process.env.MONGO_DEV_DB || "mental_health_db";
    const uri = `mongodb://${host}:${port}/${dbName}`;
    try {
        await mongoose_1.default.connect(uri);
        console.log("✅ MongoDB connected (No Auth)");
    }
    catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
}
//# sourceMappingURL=mongo.js.map