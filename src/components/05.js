import "./styles.css";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import * as React from "react";
import { useState } from "react";

function Accordian({ title, hiddenText, ...rest }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-rounded m2 p2">
      <AnimatePresence {...rest}>
        <h2 key="title" role="button" onClick={() => setToggle((p) => !p)}>
          {title}
        </h2>
        {toggle && (
          <motion.article
            key="body"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            {hiddenText}
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}

function Comp() {
  return (
    <>
      <Accordian
        title="Hello World"
        hiddenText="Excepteur nulla Lorem nulla tempor aute ullamco cupidatat laborum elit aliquip. Dolore quis nisi irure voluptate anim. Mollit sunt id ullamco cupidatat esse elit Lorem occaecat aliquip."
      />
      <div className="m2">
        <button>Next Elem</button>
      </div>
    </>
  );
}

export default Comp;
