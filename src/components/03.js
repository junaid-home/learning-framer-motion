import "./styles.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

function Box() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: 30 }}
    >
      <h1 className="text">J</h1>
    </motion.div>
  );
}

function Comp() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((p) => !p)}>Toggle</button>
      <br />
      <AnimatePresence>{toggle && <Box />}</AnimatePresence>
    </div>
  );
}

export default Comp;
