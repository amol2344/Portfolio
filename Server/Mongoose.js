// ------------------ IMPORTS ------------------
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// ------------------ APP SETUP ------------------
const app = express();
const PORT = 8000;

// ------------------ MIDDLEWARES ------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());   // Allow frontend to call backend

// ------------------ MONGODB CONNECTION ------------------
mongoose
  .connect('mongodb://localhost:27017/Contact')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// ------------------ SCHEMA ------------------
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Contact_Number: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

// ------------------ MODEL ------------------
const User = mongoose.model('User', userSchema);

// ------------------ ROUTES ------------------

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully!");
});

// Save contact form
app.post('/api/contact', async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.json({ success: true, message: "Form submitted", data });
  } catch (error) {
    console.log("Error:", error);
    res.json({ success: false, message: "Error saving contact form", error });
  }
});

// Fetch all contact entries (optional)
app.get('/api/contact', async (req, res) => {
  try {
    const allContacts = await User.find();
    res.json({ success: true, allContacts });
  } catch (error) {
    res.json({ success: false, error });
  }
});

// ------------------ START SERVER ------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
