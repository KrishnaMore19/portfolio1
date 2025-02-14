import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillCategories = {
    Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Redux Toolkit", "Bootstrap"],
    Backend: ["Node.js", "Express", "MongoDB", "MySQL", "REST API"],
    Tools: ["Git", "Github", "VS Code", "Figma"],
  };

  return (
    <section id="skills" className="relative min-h-screen py-16 bg-indigo-950">
      <div className="relative container mx-auto px-4 z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-lg md:text-xl text-gray-300">Navigate through my tech universe</p>
        </motion.div>

        {/* Category Selection */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className={`px-5 py-2 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium transition-colors relative
                ${activeCategory === category 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50" 
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"}`}
              onClick={() => setActiveCategory(category)}
              whileTap={{ scale: 0.95 }}
              aria-label={`Show ${category} skills`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-2 md:px-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
              }}
              className="relative group"
            >
              <div className="relative p-4 md:p-6 rounded-xl border border-gray-700 bg-gray-900/90 
                backdrop-blur-xl shadow-lg transition-all duration-300">
                <div className="relative flex items-center justify-center h-20 md:h-24 w-full rounded-xl bg-gray-800/50">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-200">{skill}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;