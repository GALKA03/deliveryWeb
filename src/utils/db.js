import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  );
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    mongoose.set("strictQuery", false); // Set the strictQuery option to false
    cached.promise = mongoose
      .connect(MONGO_URL, opts)
      .then(() => mongoose)
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process on connection error
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;






