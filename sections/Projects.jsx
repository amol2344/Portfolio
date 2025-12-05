import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

// ... keep your imports ...

/**
 * FIXED: Increased breakpoint to 768px so normal phones are detected as mobile.
 */
function useIsMobile(query = "(max-width: 768px)") {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
    }
    setIsMobile(mql.matches);
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, [query]);

  return isMobile;
}

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  // ... keep your projects useMemo ...
  // Note: Ensure your image/photo imports are correct variables

  const projects = useMemo(
    () => [
      {
        title: "Stridewell Studio",
        link: "https://stridewellstudio.com",
        bgColor: "#8d4d3d",
        // Ensure you are using the correct variable names from your imports
        image: isMobile ? photo4 : img4, 
      },
      {
        title: "Portfolio", // Fixed typo (was Portfollio)
        link: "",
        bgColor: "#3884d3",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => projects.map((_, i) => (i + 1) / projects.length),
    [projects]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (typeof v !== "number" || thresholds.length === 0) return;
    const idx = thresholds.findIndex((t) => v < t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Heading */}
        <h2
          className={`text-3xl font-semibold text-center z-20 ${
            isMobile ? "mb-6" : "mt-8"
          }`}
        >
          My Work
        </h2>

        {/* Center area: images / project previews */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={project.title}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isActive
                    ? "opacity-100 z-20"
                    : "opacity-0 z-0 sm:z-10 pointer-events-none"
                }`}
                // FIXED: Increased width for mobile to use more screen real estate
                style={{ width: isMobile ? "92%" : "85%", maxWidth: "1200px" }}
              >
                {/* Title (animated) */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.h3
                      key={project.title + "-title"}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      // FIXED: Adjusted text sizing and positioning for mobile
                      className="block text-center italic font-semibold sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%]"
                      style={{
                        zIndex: 5,
                        // Smaller text on mobile to prevent overflow
                        fontSize: isMobile ? "1.75rem" : "clamp(1.5rem, 6vw, 2.5rem)",
                        marginBottom: isMobile ? "1rem" : "0",
                        textAlign: isMobile ? "center" : "left",
                        width: "100%"
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  )}
                </AnimatePresence>

                {/* Image card */}
                <div
                  className={`relative w-full overflow-hidden bg-black/20 shadow-2xl ${
                    isMobile ? "rounded-lg" : "rounded-xl"
                  }`}
                  // FIXED: Adjusted height so it doesn't take up too much vertical space on mobile
                  style={{
                    height: isMobile ? "50vh" : "66vh",
                    zIndex: 10,
                    transition: "box-shadow 250ms ease",
                  }}
                >
                  <motion.img
                    key={project.title + "-img"}
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={
                      isActive
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.98 }
                    }
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    // FIXED: Using 'object-contain' on mobile ensures the full image (and text) is visible
                    // 'object-cover' is kept for larger screens (`md:object-cover`)
                    className="w-full h-full object-contain md:object-cover drop-shadow-xl md:drop-shadow-2xl"
                    style={{
                      position: "relative",
                      zIndex: 10,
                      filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                      backgroundColor: isMobile ? "#000" : "transparent" // Optional: dark bg for fitted images
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      zIndex: 11,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div
          className={`absolute ${
            isMobile ? "bottom-16" : "bottom-10"
          } left-1/2 -translate-x-1/2 z-30`}
        >
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
