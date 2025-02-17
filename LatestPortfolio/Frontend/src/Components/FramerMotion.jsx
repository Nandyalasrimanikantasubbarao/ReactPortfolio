import { motion } from "framer-motion";

const FramerMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }} // Start invisible and lower
      whileInView={{ opacity: 1, y: 0 }} // Animate to normal position
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      className="rounded-lg bg-gray-800 text-white shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
