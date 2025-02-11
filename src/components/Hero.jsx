import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import headerImg from "../assets/header-img.svg";
import StarsBackground from "./StarsBackground";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  const words = ["Hi,", "I'm", "Krishna", "More", "🚀"];

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-white px-5 sm:px-10 md:px-16 lg:px-24 relative z-10"
    >
      {/* Starry Background */}
      <StarsBackground />

      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap justify-center lg:justify-start">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-lg sm:text-xl mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Web Developer | Frontend Enthusiast
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Passionate about building interactive and dynamic web experiences with
          modern technologies like React.js, Tailwind CSS, and more.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center lg:justify-start space-x-4 mb-5 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="https://github.com/KrishnaMore19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-purple-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krishnamore19/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/krishnamore1908/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex flex-wrap justify-center lg:justify-start space-x-4 mt-4 sm:mt-6">
          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            aria-label="Contact Krishna More"
            className="bg-purple-600 hover:bg-purple-800 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-medium inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            href="/resume_krishna.pdf"
            download="Krishna_More_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className= "bg-purple-600 hover:bg-purple-800 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-medium inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Right Side - Floating Astronaut Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 z-10"
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <img src={headerImg} alt="Astronaut" className="w-64 sm:w-72 md:w-80 lg:w-96 max-w-full" />
      </motion.div>
    </section>
  );
};

export default Hero;