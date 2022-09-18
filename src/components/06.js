import { motion } from "framer-motion/dist/framer-motion";
import * as React from "react";

function Comp() {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1, times: [0.5, 1], repeat: Infinity }}
    >
      <button>Try to Click Me</button>
    </motion.div>
  );
}

export default Comp;
