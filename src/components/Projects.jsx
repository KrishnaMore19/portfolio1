import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import cryptoImage from "../assets/cr.png";
import weatherImage from "../assets/weather.png";
import newsImage from "../assets/news.png";

const projectData = [
  {
    title: "Crypto Tracking App",
    description: "Track real-time cryptocurrency prices and trends.",
    image: "/assets/cr.png", // Updated path
    github: "https://github.com/KrishnaMore19/travel-app",
    live: "https://crypto-six-self.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Get real-time weather data for any location.",
    image: "/assets/weather.png",
    github: "https://github.com/KrishnaMore19/weather-app",
    live: "https://weather-app-eight-delta-10.vercel.app/",
  },
  {
    title: "News App",
    description: "Stay updated with the latest news from around the world.",
    image: "/assets/news.png",
    github: "https://github.com/KrishnaMore19/newsapp",
    live: "https://your-news-app-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative text-white">
      <div className="absolute inset-0 z-0">
        <StarsBackground />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#3a0d63] p-5 rounded-lg shadow-lg w-full h-72 flex flex-col justify-between overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 99, 179, 0.5)" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              />

              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex justify-between mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff63b3] hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff63b3] hover:text-white"
                  aria-label="Live Project"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
