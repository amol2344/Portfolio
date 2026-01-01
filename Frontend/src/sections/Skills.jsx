import React from "react";
import { motion } from "framer-motion";
import { SiCplusplus, SiMysql, SiExpress, SiC, SiTailwindcss, SiFastapi, SiPython, SiMongodb } from "react-icons/si";
import { FaProjectDiagram, FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";

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

  // Repeat skills for seamless scrolling
  const repeated = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="w-full py-16 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-10 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* Horizontal Scroller */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-10 text-4xl sm:text-6xl text-[#1cd8d2]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {repeated.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-[120px]"
              title={skill.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
