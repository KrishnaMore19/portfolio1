import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,  // Reduced from 0.8
      ease: "easeOut"
    }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  const observerOptions = useMemo(() => ({
    rootMargin: "-10% 0px",
    threshold: [0, 0.1]  // Reduced threshold array
  }), []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? "down" : "up");
      prevScrollY = currentScrollY;

      // Reduced threshold check
      if (Math.abs(currentScrollY - lastScrollY) > 30) {
        const currentSection = sections.find(section => {
          const element = document.getElementById(section.id);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.2;
          return rect.top >= -threshold && rect.top < threshold;
        });

        if (currentSection) {
          setActiveSection(currentSection.id);
          setLastScrollY(currentScrollY);
        }
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY]);

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
            viewport={{ 
              once: false, 
              amount: 0.1,  // Reduced from 0.2
              margin: "0px"
            }}
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