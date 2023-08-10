import { animate, motion } from "framer-motion";

const svgVariants = {
  From: {
    rotate: 180,
    opacity: 0,
  },
  To: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const pathVariants = {
  From: {
    opacity: 0,
    pathLength: 0,
  },
  To: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
    },
  },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariants}
          initial="From"
          animate="To"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            initial="From"
            animate="To"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            initial="From"
            animate="To"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "tween" }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
