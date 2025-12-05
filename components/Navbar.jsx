import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50">
      {/* Navbar content */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white hidden sm:block">
          <i>Amol</i>
        </div>

        {/* Open Menu Button */}
        <button
          className="text-white text-3xl"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Right Side Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-lg
        text-white p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl absolute top-5 right-5"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        <div className="flex flex-col space-y-6 mt-20 text-3xl font-bold">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-gray-300">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-300">About</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-gray-300">Projects</a>
          <a href="#Contact" onClick={() => setOpen(false)} className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}
