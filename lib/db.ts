import mongoose from "mongoose";

let conn: any = null;

export default async function connectDB() {
  if (conn) return conn;

  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI");
  }

  conn = await mongoose.connect(process.env.MONGODB_URI);
  return conn;
}
