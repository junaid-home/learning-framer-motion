import "./styles.css";
import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

function Box({ xPosition, yPosition }) {
  return (
    <motion.div
      className="box container"
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x: xPosition + "px", y: yPosition + "px" }}
      transition={{ duration: xPosition || yPosition ? 0 : 1 }}
    >
      <h1 className="text">J</h1>
    </motion.div>
  );
}

function Comp() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);

  return (
    <div>
      <Box xPosition={valueX} yPosition={valueY} />
      <div className="container">
        <p>x: </p>
        <input
          type="range"
          value={valueX}
          min={0}
          max={500}
          onChange={(e) => setValueX(e.target.value)}
        />
      </div>
      <div className="container">
        <p>y: </p>
        <input
          type="range"
          value={valueY}
          min={0}
          max={500}
          onChange={(e) => setValueY(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Comp;
