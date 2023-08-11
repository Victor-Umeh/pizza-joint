import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import exit from "../libs/exitAnimation";

const btnVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      // repeatDelay: 1,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};
const exn = { ...exit };
const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      exit={{
        x: "-100vw",
        transiiton: {
          ease: "easeInOut",
        },
      }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={btnVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
