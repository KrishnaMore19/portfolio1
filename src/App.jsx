import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "skills", "projects", "contact"];
      let currentSection = "Home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -50 && rect.top < window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StarsBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="relative z-10 flex flex-col w-full">
        <motion.div
          id="Home"
          className="min-h-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          id="skills"
          className="min-h-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          id="projects"
          className="min-h-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contact"
          className="min-h-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}

export default App;

