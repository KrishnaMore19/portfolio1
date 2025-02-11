import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_2wszihj", 
        "template_o1s5ut2", 
        form.current,
        "KvQfpmHqSsCPJNd_j" 
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        () => {
          setStatusMessage("Failed to send message. Please try again.");
          setTimeout(() => setStatusMessage(""), 6000);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    { icon: <FaEnvelope className="w-6 h-6" />, text: "krishna.more8200@gmail.com", delay: 0.1 },
    { icon: <FaPhone className="w-6 h-6" />, text: "+91 8200640037", delay: 0.2 },
    { icon: <FaMapMarkerAlt className="w-6 h-6" />, text: "Ahmedabad, Gujarat", delay: 0.3 }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <StarsBackground />
      <div className="relative container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: info.delay }}
                className="flex items-center space-x-4 text-gray-300"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-500">
                  {info.icon}
                </div>
                <span className="text-lg">{info.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form ref={form} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 text-white" required />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 text-white" required />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <textarea name="message" placeholder="Your Message" rows={5} className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none" required />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2
                ${isSubmitting ? "bg-indigo-700" : "bg-indigo-600 hover:bg-indigo-700"}
                text-white transition-colors`}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <FaPaperPlane className="w-5 h-5" />
            </motion.button>

            {statusMessage && <p className="text-center text-white mt-2">{statusMessage}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
