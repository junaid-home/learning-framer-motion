import "./styles.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import * as React from "react";
import { useState } from "react";

function Modal({ open, onClose, children, ...rest }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="modal"
          {...rest}
        >
          <span className="close close-position" onClick={onClose}>
            X
          </span>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Comp() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Modal open={toggle} onClose={() => setToggle((p) => !p)}>
        <div className="box container m2">
          <text className="text">J.J</text>
        </div>
      </Modal>

      <button onClick={() => setToggle(true)}>Open Model</button>
    </>
  );
}

export default Comp;
