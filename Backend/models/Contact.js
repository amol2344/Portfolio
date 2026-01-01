import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Contact_Number: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      lowercase: true,
    },
    Message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
