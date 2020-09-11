import React from "react";

import "./info.css";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.5 }}
      style={{ color: "orange" }}
    >
      <div className="info_page">
        <div className=""> Info Page </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Info;
