import React from "react";

import "./work.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <div className="about">
        <div className={`center_items`}>
          <h1> You are welcome to my some projects. </h1>
          <motion.div
            className={`bottom_title`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p> Togather, we can do them better </p>
          </motion.div>
        </div>
      </div>

      <div className="flex_parent_1 flex_parent">
        <div className="flex_1">
          <div className="child_flex">
            <div className="circle"></div>
            <div className="project_data">
              <h2>Pizza</h2>
              <p>Developing tools</p>
            </div>
          </div>
          <a href="https://pizza-portfolio.herokuapp.com/"> See more ❯ </a>
        </div>
        <div className="flex_1">
          <img
            src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png"
            alt="img"
          />
        </div>
      </div>

      {/* <div className="flex_parent_2 flex_parent">
        <div className="flex_2">
          <div className="child_flex">
            <div className="circle"></div>
            <div className="project_data">
              <h2>haiku</h2>
              <p>Developing tools</p>
            </div>
          </div>
          <NavLink to="/second_link"> Learn more ❯ </NavLink>
        </div>
        <div className="flex_2">
          <img
            src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png"
            alt="img"
          />
        </div>
      </div>

      <div className="flex_parent_3 flex_parent">
        <div className="flex_3">
          <div className="child_flex">
            <div className="circle"></div>
            <div className="project_data">
              <h2>haiku</h2>
              <p>Developing tools</p>
            </div>
          </div>
          <NavLink to="/third_link"> Learn more ❯ </NavLink>
        </div>
        <div className="flex_3">
          <img
            src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png"
            alt="img"
          />
        </div>
      </div>
      <div className="flex_parent_4 flex_parent">
        <div className="flex_4">
          <div className="child_flex">
            <div className="circle"></div>
            <div className="project_data">
              <h2>haiku</h2>
              <p>Developing tools</p>
            </div>
          </div>
          <NavLink to="/fourth_link"> Learn more ❯ </NavLink>
        </div>
        <div className="flex_4">
          <img
            src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png"
            alt="img"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Work;
