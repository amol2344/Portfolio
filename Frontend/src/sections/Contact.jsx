import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/Particlesbackground";
import { ToastContainer, toast } from "react-toastify";
export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { Name: name, Contact_Number: contact, Email: email, Message: message };
    
    const API_URL = import.meta.env.VITE_API_URL || "";

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        toast.success("Message Sent Successfully!");
        setName("");
        setContact("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error connecting to server.");
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />

      <div className="mt-4 w-[700px] p-6 rounded-xl bg-black/30 backdrop-blur-lg  border-white/10">
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <motion.h2
            className="
             flex justify-center text-4xl sm:text-5xl font-bold bg-clip-text text-transparent
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Get In Touch
          </motion.h2>

          {/* Name + Contact Number */}
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // suppose user type amol then setName(Amol) here e is the event
                className="w-full p-2 rounded-md text-white border border-white/40 bg-transparent focus:outline-none hover:bg-white/10"
                required
              />
            </div>

            <div >
              <label className="text-sm">Contact Number</label>
              <input
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full p-2 rounded-md text-white border border-white/40 bg-transparent focus:outline-none hover:bg-white/10"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md text-white border border-white/40 bg-transparent focus:outline-none hover:bg-white/10"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 h-32 rounded-md text-white border border-white/40 bg-transparent focus:outline-none hover:bg-white/10"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 w-fit self-end rounded-xl border border-white/30 hover:bg-white hover:text-black transition"
          >
            Submit
          </button>
        </form>
      </div>
       <ToastContainer position="top-center" autoClose={3000}  />
    </section>
  );
}
