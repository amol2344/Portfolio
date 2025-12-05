import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Contact from "./models/Contact.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// POST route to save contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, contact, message } = req.body;

    const newEntry = new Contact({
      name,
      email,
      contact,
      message,
    });

    await newEntry.save();

    res.status(201).json({ success: true, message: "Message saved!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error", err });
  }
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
