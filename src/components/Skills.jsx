import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiGit,
  SiFigma,
  SiGnubash
} from "react-icons/si";
import { FaAws, FaCode } from "react-icons/fa"; // AWS and VS Code icons

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Full Stack");

  const skillCategories = {
    "Full Stack": [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Jenkins", icon: <SiJenkins /> },
    ],
    "Frontend Tools": [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    "Other Tools": [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Bash Scripting", icon: <SiGnubash /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="relative min-h-screen py-16 bg-indigo-950">
      <div className="relative container mx-auto px-4 z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-lg md:text-xl text-gray-300">Explore my DevOps + Full Stack toolbox</p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
        >
          {Object.keys(skillCategories).map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`px-5 py-2 md:px-6 md:py-2 rounded-full text-base md:text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-950
                ${activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Show ${category} skills`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 px-2 md:px-4"
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative p-5 md:p-6 rounded-2xl border border-indigo-600 bg-gray-900/80 backdrop-blur-sm
                hover:shadow-indigo-500/40 hover:shadow-lg hover:border-indigo-400 transition-all duration-300 
                flex flex-col items-center justify-center text-center h-full min-h-[120px]">
                <div className="text-3xl md:text-4xl text-indigo-400 mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
