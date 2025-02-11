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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  const observerOptions = useMemo(() => ({
    rootMargin: "-10% 0px",
    threshold: [0, 0.1, 0.5, 1]
  }), []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? "down" : "up");
      prevScrollY = currentScrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        const currentSection = sections.find(section => {
          const element = document.getElementById(section.id);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.3; // Adjusted threshold
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [observerOptions]);

  return (
    <div className="relative overflow-hidden">
      <StarsBackground />
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrollDirection={scrollDirection}
      />

      <AnimatePresence mode="wait">
        <div className="relative z-10 flex flex-col w-full">
          {sections.map(({ id, Component }) => (
            <motion.section
              key={id}
              id={id}
              className="min-h-screen w-full relative snap-start"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ 
                once: false, 
                amount: 0.3,
                margin: "0px"
              }}
            >
              <div className="h-full w-full absolute top-0 left-0">
                <Component />
              </div>
            </motion.section>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;