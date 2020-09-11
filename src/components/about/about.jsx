import React from "react";

import "./about.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class About extends React.Component {
  state = {
    hidden: false,
  };
  render() {
    return (
      <motion.div
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className={`center_items`}>
          <h1> I build value by design. </h1>
          <motion.div
            className={`bottom_title`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="top_data"> I’m Samandar O'ralov. </div>
            <p>
              {" "}
              Experienced Software Engineer with a demonstrated history of
              working in the computer software industry
            </p>
            <p>
              {" "}
              Skilled in React, Redux, Mobx, Typescript, NextJs, Material-UI ...
              and English.{" "}
            </p>
            <p>
              {" "}
              Strong engineering professional with a Bachelor's degree focused
              in CyberSecurity from TUIT .{" "}
            </p>
            <p>
              {" "}
              Have an interesting project?{" "}
              <Link to="/contact" style={{ color: "orange" }}>
                Let's talk.
              </Link>{" "}
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}

export default About;
