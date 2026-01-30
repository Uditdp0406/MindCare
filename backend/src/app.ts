import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import journalRoutes from "./routes/journalRoutes";

import chatRoutes from "./routes/chatRoutes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: "2mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/chat", chatRoutes);


export default app;
