import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0.5,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0.5,
  },
};

const pageTransition = {
  type: "spring",
  // type: "linear",
  ease: "easeOut",
  duration: 1,
};

const AnimationLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    // <AnimatePresence>
    <motion.main
      key={pathname}
      initial="initial"
      animate="in"
      // exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.main>
    // </AnimatePresence>
  );
};

export default AnimationLayout;
