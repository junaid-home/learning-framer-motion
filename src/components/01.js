import "./styles.css";
import * as React from "react";
import { motion } from "framer-motion/dist/framer-motion";

function Box() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text">J</h1>
    </motion.div>
  );
}

function Comp() {
  return <Box />;
}

export default Comp;
