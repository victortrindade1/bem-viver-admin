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
  ease: "easeOut",
  duration: 1.5,
};

const AnimationLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    // <AnimatePresence>
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
    // </AnimatePresence>
  );
};

export default AnimationLayout;
