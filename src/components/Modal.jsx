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
const modal = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 300,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 110,
      damp: 20,
    },
  },
};
const Modal = ({ setShowModal, showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
          >
            <p>Reorder another pizza</p>
            <Link to="/">
              <button>Reorder</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
