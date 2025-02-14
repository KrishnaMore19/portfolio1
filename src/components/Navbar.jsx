import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

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

      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, setActiveSection]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-indigo-950 backdrop-blur-lg shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white">
            Krishna More
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "skills", "projects", "contact"].map((item) => (
              <a
                key={`desktop-${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                  setActiveSection(item);
                }}
                href={`#${item}`}
                className={`text-white text-lg font-medium hover:opacity-80 transition ${
                  activeSection === item ? "underline" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu - Card Style */}
        {isOpen && (
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-900 text-white rounded-lg shadow-xl p-5 md:hidden"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 items-center">
              {["Home", "skills", "projects", "contact"].map((item) => (
                <a
                  key={`mobile-${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                    setActiveSection(item);
                  }}
                  href={`#${item}`}
                  className={`text-white text-lg font-medium hover:opacity-80 transition ${
                    activeSection === item ? "underline" : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
