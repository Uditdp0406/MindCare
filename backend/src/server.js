"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_1 = require("./services/mongo");
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
(async () => {
    await (0, mongo_1.connectMongo)(); // we'll create this next
    const server = app_1.default.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
    process.on("SIGINT", () => {
        console.log("SIGINT received, shutting down");
        server.close(() => process.exit(0));
    });
})();
//# sourceMappingURL=server.js.map