import app from "./app";
import dotenv from "dotenv";
import { connectMongo } from "./services/mongo";

dotenv.config();

const PORT = process.env.PORT || 4000;

(async () => {
  await connectMongo(); // we'll create this next
  const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

  process.on("SIGINT", () => {
    console.log("SIGINT received, shutting down");
    server.close(() => process.exit(0));
  });
})();
