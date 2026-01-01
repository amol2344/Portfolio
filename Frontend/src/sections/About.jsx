import React from 'react'
import { motion } from "framer-motion";
import Amol from "/src/assets/Amol12.png";
export default function About() {

  const status = [
    { label: "Education", value: "Btech in IT" },
    { label: "Skills", value: "Fullstack" },
    { label: "Focus", value: "Performance" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ];

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >

          {/* Image */}
          <motion.div
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]
            rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br 
            from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
          >
            <motion.img
            whileHover={{scale:1.2, zoom:1}}
           
              src={Amol}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              Amol Patil
            </h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build scalable, modern applications with a strong focus on clean architecture, 
              delightful UX, and performance. My toolkit  React, Node.js, Express.js 
              MongoDB, Tailwind CSS, and Restful API — bringing ideas to life from 
              concept to production with robust APIs and smooth interfaces.
            </p>

            {/* Status Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {status.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>

              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About He Section */}
        <motion.div
          className="text-center md:text-left w-250 "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="mt-3 text-2xl  sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>

          <p className='text-gray leading-relaxed text-base sm:text-lg'>
           I'm a Software Developer, Content Creator, and Web Developer — passionate about building fast, resilient <br></br>applications that blend performance with creativity.
          </p>

          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            I love turning ideas into scalable, user-friendly products that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
