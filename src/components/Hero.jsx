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
  const words = ["Hi,", "I'm", "KRISHNA", "MORE"];

  return (
    <motion.section
      id="Home"
      className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center text-white px-4 sm:px-8 md:px-12 lg:px-20 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Starry Background */}
      <StarsBackground />

      {/* Left Side - Text Content */}
      <div className="sm:w-1/2 text-center sm:text-left z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap justify-center sm:justify-start inline-flex whitespace-nowrap">
          {words.map((word, i) => (
            <motion.span
            key={i}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {word}
          </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-lg sm:text-xl mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Web Developer | Frontend Enthusiast
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Passionate about building interactive and dynamic web experiences with
          modern technologies like React.js, Tailwind CSS, and more.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center sm:justify-start space-x-4 mb-5 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="https://github.com/KrishnaMore19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-purple-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krishnamore19/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/krishnamore1908/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl sm:text-2xl hover:text-pink-400"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex flex-wrap justify-center sm:justify-start space-x-4 mt-4 sm:mt-6">
          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            aria-label="Contact Krishna More"
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-medium inline-block shadow-lg"
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
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-medium inline-block shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Right Side - Floating Astronaut Image */}
      <motion.div
        className="sm:w-1/2 flex justify-center mt-6 sm:mt-0 z-10"
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <img src={headerImg} alt="Astronaut" className="w-56 sm:w-64 md:w-72 lg:w-80 max-w-full" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
