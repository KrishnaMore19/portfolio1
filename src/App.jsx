import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

const sections = [
  { id: "Home", Component: Hero },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  const observerOptions = useMemo(() => ({
    rootMargin: "-10% 0px",
    threshold: [0, 0.1]
  }), []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
    
    if (Math.abs(currentScrollY - lastScrollY.current) > 30) {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.2;
        return rect.top >= -threshold && rect.top < threshold;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        lastScrollY.current = currentScrollY;
      }
    }
  };

  useEffect(() => {
    const debouncedScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <StarsBackground />
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrollDirection={scrollDirection}
      />

      <div className="relative z-10 flex flex-col w-full">
        {sections.map(({ id, Component }) => (
          <motion.section
            key={id}
            id={id}
            className="min-h-screen w-full relative"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1, margin: "0px" }}
          >
            <div className="h-full w-full">
              <Component />
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

export default App;