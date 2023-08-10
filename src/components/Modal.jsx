import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
