import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import headerImg from "../assets/header-img.svg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <motion.section
      id="Home"
      className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center text-white px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 bg-indigo-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Left Side - Text Content */}
      <div className="sm:w-1/2 text-center sm:text-left z-10">
        <motion.div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex flex-wrap justify-center sm:justify-start">
          <motion.span variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            Hi,
          </motion.span>
          <motion.span className="ml-2" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            I'm
          </motion.span>
          <motion.span className="ml-2 text-purple-400" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            Krishna
          </motion.span>
          <motion.span className="ml-2 text-purple-400" variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            More 🚀
          </motion.span>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full Stack Developer | DevOps Engineer
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
         Passionate about building scalable web applications and automating cloud infrastructure.  
I blend development and operations to deliver robust, efficient, and user-friendly digital solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center sm:justify-start space-x-4 mb-5 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="https://github.com/KrishnaMore19" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-purple-400" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/krishnamore19/" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-blue-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/krishnamore1908/" target="_blank" rel="noopener noreferrer" className="text-white text-xl sm:text-2xl hover:text-pink-400" aria-label="Instagram">
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
