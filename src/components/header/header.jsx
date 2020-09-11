import React from "react";
import { withRouter } from "react-router-dom";

import "./header.css";
import { NavLink } from "react-router-dom";
import ToggleDrawer from "../sideDrawer/toggle";

const Header = ({ clicked, location }) => {
  return (
    <div className="header_data">
      <div className="drawer">
        <ToggleDrawer click={clicked} />
      </div>
      <div className="left_items">
        <ul className="ul">
          <li>
            {" "}
            <NavLink exact to="/" activeStyle={{ color: "orange" }}>
              {" "}
              Home{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/about" activeStyle={{ color: "orange" }}>
              {" "}
              About{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/work" activeStyle={{ color: "orange" }}>
              {" "}
              Work{" "}
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/writing" activeStyle={{ color: "orange" }}>
              {" "}
              Writing{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="contact">
        {(location.pathname === "/about") |
        (location.pathname === "/resume") ? (
          <div className="both_right_header">
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
      </div>
    </div>
  );
};

export default withRouter(Header);
