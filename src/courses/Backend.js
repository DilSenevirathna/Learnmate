// courses/Health.js
import React, { useState } from "react";
import "./Backend.css";

const Backend = () => {
    const [activeTab, setActiveTab] = useState("nodejs");

    return (
        <div className="backend-container">
            {/* Hero Section */}
            <section className="backend-hero">
                <h1>Backend Development</h1>
                <p>Master the art of building scalable, secure, and efficient server-side applications.</p>
            </section>

            {/* Tab Section */}
            <div className="backend-tabs">
                <button 
                    className={activeTab === "nodejs" ? "tab active" : "tab"} 
                    onClick={() => setActiveTab("nodejs")}
                >
                    Node.js
                </button>
                <button 
                    className={activeTab === "django" ? "tab active" : "tab"} 
                    onClick={() => setActiveTab("django")}
                >
                    Django
                </button>
                <button 
                    className={activeTab === "springboot" ? "tab active" : "tab"} 
                    onClick={() => setActiveTab("springboot")}
                >
                    Spring Boot
                </button>
            </div>

            {/* Tab Content */}
            <div className="backend-content">
                {activeTab === "nodejs" && (
                    <div className="content-box">
                        <h2>Node.js</h2>
                        <p>Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to build scalable backend applications.</p>
                    </div>
                )}
                {activeTab === "django" && (
                    <div className="content-box">
                        <h2>Django</h2>
                        <p>Django is a high-level Python framework that encourages rapid development and clean, pragmatic design.</p>
                    </div>
                )}
                {activeTab === "springboot" && (
                    <div className="content-box">
                        <h2>Spring Boot</h2>
                        <p>Spring Boot simplifies the development of Java-based applications with built-in features like microservices and REST APIs.</p>
                    </div>
                )}
            </div>
            <br></br>
        </div>
    );
};


export default Backend;