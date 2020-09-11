import React from "react";

import "./home.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <div className={`center_items`}>
        <h2> Hi, I'm Samandar O'ralov. </h2>
        <h1> Front-end Developer </h1>
        <motion.div
          className={`bottom_title`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <p>
            {" "}
            I make web sites/apps with popular js framework which is named
            React.{" "}
          </p>
          <p>
            {" "}
            Separated new approach for all projects{" "}
            <span>{/* matrix.org. */}</span>{" "}
          </p>
          <p>
            {" "}
            You can trust me completely{" "}
            <span role="img" aria-label="">
              ✌️
            </span>{" "}
          </p>
        </motion.div>
        <div className="learn">
          {" "}
          <NavLink to="/about"> Learn more ❯ </NavLink>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
