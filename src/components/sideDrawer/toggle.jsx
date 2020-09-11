import React from "react";

import "./toggle.css";

const ToggleDrawer = ({ click }) => {
  return (
    <button className="toggle_button" onClick={click}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
};

export default ToggleDrawer;
