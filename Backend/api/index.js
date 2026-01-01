import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "../Mongoose.js";
import Contact from "../models/Contact.js";

// Load env vars from parent directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

app.use(express.json());
app.use(cors({ 
  origin: "*", // Allow all origins for now to avoid CORS issues during dev/deploy. User can restrict later.
  credentials: true 
}));

// Connect to DB (cached connection handled in Mongoose.js)
connectDB();

// Health check
app.get("/api/health", (req, res) => res.json({ message: "✅ Backend running" }));
app.get("/", (req, res) => res.json({ message: "Backend is ready" }));

// Save contact
app.post("/api/contact", async (req, res) => {
  try {
    await connectDB(); // Ensure connection is active
    const data = await Contact.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to save contact" });
  }
});

// Start server locally (Vercel handles this in production)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

export default app;