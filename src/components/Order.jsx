import { motion } from "framer-motion";
// import { useAnimationVariants } from "../animationContext";
const container = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damp: 8,
      staggerChildren: 2,
      when: "beforeChildren",
    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  // const { container, button } = useAnimationVariants();
  return (
    <motion.div
      className="container order"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
