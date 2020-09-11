import React from "react";

import "./side-drawer.css";
import { NavLink, withRouter } from "react-router-dom";
import { motion } from "framer-motion";

const SideDrawer = ({ clicked, hidden, location }) => {
  return (
    <motion.div
      className={hidden ? "side_drawer open" : "side_drawer"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.5 }}
    >
      <div className="menu_itmes">
        <ul className="ul_items">
          <li onClick={clicked}>
            {" "}
            <NavLink exact to="/" activeStyle={{ color: "orange" }}>
              {" "}
              Home{" "}
            </NavLink>{" "}
          </li>
          <li onClick={clicked}>
            {" "}
            <NavLink to="/about" activeStyle={{ color: "orange" }}>
              {" "}
              About{" "}
            </NavLink>{" "}
          </li>
          <li onClick={clicked}>
            {" "}
            <NavLink to="/work" activeStyle={{ color: "orange" }}>
              {" "}
              Work{" "}
            </NavLink>{" "}
          </li>
          <li onClick={clicked}>
            {" "}
            <NavLink to="/writing" activeStyle={{ color: "orange" }}>
              {" "}
              Writing{" "}
            </NavLink>{" "}
          </li>
          <li onClick={clicked}>
            {(location.pathname === "/about") |
            (location.pathname === "/resume") ? (
              <div className="both_right_">
                <NavLink to="/contact" activeStyle={{ color: "orange" }}>
                  Contact
                </NavLink>
                <NavLink to="/resume" activeStyle={{ color: "orange" }}>
                  Resume
                </NavLink>
              </div>
            ) : (
              <NavLink to="/contact" activeStyle={{ color: "orange" }}>
                Contact
              </NavLink>
            )}
          </li>
          <li onClick={clicked}> X </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default withRouter(SideDrawer);
