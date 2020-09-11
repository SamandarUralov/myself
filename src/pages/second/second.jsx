import React from "react";

import { NavLink } from "react-router-dom";

const Second = () => {
  return (
    <div>
      <div className="flex_parent_1 flex_parent">
        <div className="flex_1">
          <NavLink to="/work"> ❮ View all projects </NavLink>
          <div className="child_flex">
            <div className="circle"></div>
            <div className="project_data">
              <h2>haiku</h2>
              <p>Developing tools</p>
            </div>
          </div>
        </div>
        <div className="flex_1">
          <img
            src="https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b3a377bc0be087a91158b9c_Building%20-%20Haiku%20thumbnail.png"
            alt="img"
          />
        </div>
      </div>
      <div className="bottom_info">
        <div></div>
        <div className="last_next">
          <NavLink to="/first_link">❮ View last project</NavLink>
          <NavLink to="/third_link">View next Project ❯</NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Second;
