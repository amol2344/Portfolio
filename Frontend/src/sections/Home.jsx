import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/Particlesbackground";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import avator from "../assets/img8.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://twitter.com" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/amol-patil-a083a9288" },
  { Icon: FaGithub, label: "Github", href: "https://github.com" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Fullstack Developer", "Software Developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <Navbar />
      <ParticlesBackground />

      {/* Glowing Background Circles */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] max-w-[500px] max-h-[500px]
          rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] max-w-[500px] max-h-[500px]
          rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I am a{" "}
              <span className="text-[#00bf8f]">{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <span className="text-white font-bold text-5xl sm:text-7xl lg:text-8xl lg:whitespace-nowrap">
                <br />
                Amol Patil
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I’m an aspiring IT engineer pursuing my B.Tech in Information Technology.
              My focus is on writing clean code, solving problems, and learning continuously.
              Welcome to my portfolio — a space showcasing my skills and projects.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="/AMOL_PATIL_Resume (4).pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                MY Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start relative">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  whileHover="hover"
                  whileTap="tap"
                  variants={glowVariants}
                  className="text-gray-300"
                  initial="initial"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
       <div className="relative hidden lg:flex items-center justify-center h-screen w-[45vw]"> <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none" style={{ right: "10px", width: "min(22vw,410px)", height: "min(22vw,760px)", borderRadius: "50%", filter: "blur(38px)", opacity: 0.32, background: "conic-gradient(from 0deg, #1cd8d2 , #00d8d2 , #302b63 , #1cd8d2)", }} ></div> <motion.img src={avator} alt="amol patil" className=" select-none mb-22 ml-38 pointer-events-none object-contain w-[90vw] /* increased width */ max-w-[1100px] /* maximum width */ h-[110vh] /* increased height */ max-h-[1200px] /* maximum height */ right-[-30px]" initial={{ opacity: 0, y: 40, scale: 0.98 }} animate={{ opacity: 1, y: 1, scale: 1 }} whileHover={{ scale: 1.5, rotate: 2 }} transition={{ delay: 0.2, duration: 0.8 }} /></div> </div> </section> ); }