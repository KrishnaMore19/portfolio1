import React, { useState } from "react";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground"; // Correct import

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillCategories = {
    Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Redux Toolkit", "Bootstrap"],
    Backend: ["Node.js", "Express", "MongoDB", "MySQL", "REST API"],
    Tools: ["Git", "Github", "VS Code", "Figma"],
  };

  return (
    <section id="skills" className="relative min-h-screen py-16">
      <StarsBackground />

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-lg md:text-xl text-gray-300">Navigate through my tech universe</p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium transition-colors relative
                ${activeCategory === category 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50" 
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"}`}
              onClick={() => setActiveCategory(category)}
              whileTap={{ scale: 0.95 }}
              aria-label={`Show ${category} skills`}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-indigo-500 animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 px-2 md:px-4">
            {skillCategories[activeCategory].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <motion.div
                  className="relative p-4 md:p-6 rounded-xl border border-gray-700 bg-gray-900/90 
                  backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:shadow-indigo-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background shine effect for mobile as well */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-indigo-500/10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 blur-md"
                    whileTap={{ opacity: 1 }}
                  />

                  <motion.div
                    className="relative flex items-center justify-center h-20 md:h-24 w-full rounded-xl bg-gray-800/50 
                    group-hover:bg-indigo-600/20 transition-colors duration-300"
                  >
                    <h3 className="text-sm md:text-lg font-semibold text-gray-200">{skill}</h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
