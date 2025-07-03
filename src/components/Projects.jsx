import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const placeholderImage = "https://via.placeholder.com/300x150?text=Project+Preview";

const projectData = [
  {
    title: "Crypto Tracking App",
    description: "Track real-time cryptocurrency prices and trends.",
    image: "/Cr.png",
    github: "https://github.com/KrishnaMore19/travel-app",
    live: "https://crypto-six-self.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Get real-time weather data for any location.",
    image: "/weather.png",
    github: "https://github.com/KrishnaMore19/weather-app",
    live: "https://weather-app-eight-delta-10.vercel.app/",
  },
  {
    title: "News App",
    description: "Stay updated with the latest news from around the world.",
    image: "/news.png",
    github: "https://github.com/KrishnaMore19/newsapp",
    live: null,
  },
  {
    title: "Expense Tracker (MERN + Docker + K8s)",
    description:
      "Full-stack app with Docker containers, deployed via Kubernetes. Built using MongoDB, Express.js, React.js, and Node.js.",
    image: null,
    github: "https://github.com/KrishnaMore19/expenses-tracker",
    live: null,
  },
  {
    title: "Three-Tier App on AWS (DevOps)",
    description:
      "Deployed a React + Node + MongoDB app on AWS EKS using Terraform, Jenkins, and Kubernetes with GitOps CI/CD.",
    image: null,
    github: "https://github.com/KrishnaMore19/3-tier-on-aws",
    live: null,
  },
  {
    title: "Job Portal Website",
    description: "A full-featured job portal with role-based access for employers and job seekers.",
    image: null,
    github: "https://github.com/KrishnaMore19/JobPortal",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative text-white bg-indigo-950">
      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-indigo-800/30 to-indigo-900/30 border border-indigo-700 backdrop-blur-md p-5 rounded-2xl shadow-lg h-80 flex flex-col justify-between group transition hover:shadow-indigo-500/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={project.image || placeholderImage}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              />

              <div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
              </div>

              <div className="flex justify-between mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-white"
                    aria-label="Live Project"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm italic">No live preview</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
