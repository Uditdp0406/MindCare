import mongoose from "mongoose";

export async function connectMongo() {
  const host = process.env.MONGO_DEV_HOST || "localhost";
  const port = process.env.MONGO_DEV_PORT || "27017";
  const dbName = process.env.MONGO_DEV_DB || "mental_health_db";

  const uri = `mongodb://${host}:${port}/${dbName}`;

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected (No Auth)");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}
