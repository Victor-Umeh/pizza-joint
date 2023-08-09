import { createContext, useContext } from "react";

const AnimationContext = createContext();
const variants = {
  container: {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { delay: 0.5, type: "spring" },
    },
  },

  button: {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeOut" },
    },
  },
};

const AnimationProvider = ({ children }) => {
  return (
    <AnimationContext.Provider value={variants}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationVariants = () => useContext(AnimationContext);
export default AnimationProvider;
