// Home.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import './Home.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState("vision");
    return (
        <div>
            
            <header className="hero-banner">
                <div className="hero-text">
                    <h1>Master Software Development with Industry Experts</h1>
                    <p>🚀 Learn. Build. Grow.</p>
                    <p>💡 Beginner to Advanced Courses | Hands-on Projects | Certifications</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </header>


            <section className="about">
            <div className="tab-container" id="vision-mission-tab">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="tab-content"
        id="tab-content-box"
      >
        <div className="tab-header" id="tab-header-section">
          <button 
            className={`tab-button ${activeTab === "vision" ? "active" : ""}`} 
            onClick={() => setActiveTab("vision")}
            id="vision-tab-btn"
          >
            Vision
          </button>
          <button 
            className={`tab-button ${activeTab === "mission" ? "active" : ""}`} 
            onClick={() => setActiveTab("mission")}
            id="mission-tab-btn"
          >
            Mission
          </button>
        </div>
        <div className="tab-body" id="tab-body-section">
          {activeTab === "vision" && (
            <div className="tab-panel" id="vision-panel">
              <h2 id="vision-title">Our Vision</h2>
              <p id="vision-text">
                To empower developers by providing high-quality learning resources, 
                fostering a strong coding community, and driving innovation in technology.
              </p>
            </div>
          )}
          {activeTab === "mission" && (
            <div className="tab-panel" id="mission-panel">
              <h2 id="mission-title">Our Mission</h2>
              <p id="mission-text">
                To make coding education accessible to all, offering interactive lessons, 
                real-world projects, and continuous mentorship to bridge the gap between learning and industry demands.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
            </section>


            <section className="course-categories">
                <h2>Course Categories</h2>
                <div className="tabs">
                    <button className="tab-button">📌 Web Development</button>
                    <button className="tab-button">📱 Mobile Development</button>
                    <button className="tab-button">🤖 AI & ML</button>
                    <button className="tab-button">🖥️ Backend & Databases</button>
                    <button className="tab-button">🔒 Cybersecurity</button>
                </div>
                <div className="tab-content">
                    <div>
                        <h3>Web Development</h3>
                        <p>Learn HTML, CSS, JavaScript, React, and more.</p>
                    </div>
                    <div>
                        <h3>Mobile Development</h3>
                        <p>Android & iOS app development.</p>
                    </div>
                    <div>
                        <h3>AI & ML</h3>
                        <p>Machine learning, deep learning, and AI applications.</p>
                    </div>
                    <div>
                        <h3>Backend & Databases</h3>
                        <p>Node.js, Python, SQL, NoSQL.</p>
                    </div>
                    <div>
                        <h3>Cybersecurity</h3>
                        <p>Secure coding, ethical hacking, and penetration testing.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>Student Success Stories</h2>
                <div className="testimonial-slider">
                    <div className="testimonial">
                        <p>⭐ "This platform helped me land my first developer job!" – John Doe, Full Stack Developer</p>
                    </div>
                    <div className="testimonial">
                        <p>⭐ "The AI & ML course gave me practical experience with real-world projects." – Sarah Lee, Data Scientist</p>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <h2>🎓 Join 100,000+ learners and start your journey today!</h2>
                <button className="cta-button">Sign Up for Free</button>
                <button className="cta-button">Browse Courses</button>
            </section>
        </div>
    );
};

export default Home