import React from "react";

import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact_me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <div className="top_data_contact">
        <h1 className="talk"> Let's talk. </h1>
        <p className="p">
          {" "}
          Get in touch via the form below, or by emailing{" "}
          <span> uralovsamandar1999@gmail.com</span>{" "}
        </p>
      </div>
      <div className="all-forms">
        <label> Name: </label>
        <input
          className="form-input"
          placeholder="Enter your name"
          type="text"
          name=""
        />
        <label> Email/Telegram Address: </label>
        <input
          className="form-input"
          placeholder="Enter your email address"
          type="text"
          name=""
        />
        <label htmlFor=""> Message: </label>
        <textarea
          name=""
          placeholder="Enter your message"
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <div className="button">Submit</div>
      </div>
    </motion.div>
  );
};

export default Contact;
