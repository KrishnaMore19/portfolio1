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
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4
    }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Memoized intersection observer options
  const observerOptions = useMemo(() => ({
    rootMargin: "-50% 0px",
    threshold: [0, 0.5, 1]
  }), []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? "down" : "up");
      prevScrollY = currentScrollY;

      // Debounced section detection
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        const currentSection = sections.find(section => {
          const element = document.getElementById(section.id);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          return rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2;
        });

        if (currentSection) {
          setActiveSection(currentSection.id);
          setLastScrollY(currentScrollY);
        }
      }
    };

    // Optimized scroll listener with requestAnimationFrame
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

  // Intersection Observer setup
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
    <div className="relative min-h-screen overflow-hidden">
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
              className="min-h-screen relative"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ 
                once: false, 
                amount: 0.2,
                margin: "-100px"
              }}
            >
              <div className="h-full w-full">
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