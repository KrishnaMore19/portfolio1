import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#2c1e4e] flex items-center justify-center text-white text-3xl font-bold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      Loading...
    </motion.div>
  );
};

export default Loader;
