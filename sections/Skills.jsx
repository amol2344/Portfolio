import React from "react";
import { motion } from "framer-motion";
import { SiCplusplus } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { SiC } from "react-icons/si";

import { FaJava, FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiC />, name: "C Programming" },
    { icon: <FaReact />, name: "React" },
       { icon: <SiExpress />, name: "Express.js" },
{ icon: <FaProjectDiagram />, name: "DSA" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
   { icon: <SiCplusplus />, name: "C++" },
   { icon: <SiMysql />, name: "SQL" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    
  ];

  const repeated = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent 
        bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
    
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* Horizontal Scroller */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 text-6xl text-[#1cd8d2]"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={s.name}
              title={s.name}
            >
              <span className="mt-4 hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
