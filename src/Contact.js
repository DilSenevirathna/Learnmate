// Contact.js
import React from 'react';
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">
          Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" className="contact-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/yourgithub" className="contact-link" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
