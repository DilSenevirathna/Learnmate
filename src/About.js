// About.js
// About.js
import React from 'react';
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="about-content">
        <h1 className="about-title">About Me</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;
        <div className="about-text-container">
          <p className="about-text">
            Hi, I'm a passionate <span className="highlight">Software Engineer</span> with one year of experience in
            Frontend Development. I specialize in crafting user-friendly and interactive web applications using modern
            technologies. My goal is to make coding accessible and enjoyable for everyone.
          </p>
          <p className="about-text">
            Through this platform, I share my knowledge, tips, and real-world experiences to help others
            learn and grow as developers. Join me in this exciting journey of code learning and innovation!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
