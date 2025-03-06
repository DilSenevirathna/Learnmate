// Frontend.js
import React, { useState } from "react";
import Slider from "react-slick"; // Importing the slider
import "./Frontend.css"; // Importing the CSS file

const Frontend = () => {
  const [activeTab, setActiveTab] = useState("html"); // Default active tab

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="frontend-development">
      {/* Full-width Hero Banner */}
      <div className="hero-bannerf">
        <div className="hero-text">
          <h1>Front-end Development</h1>
          <p>Master the art of crafting interactive and dynamic user interfaces</p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <img src="https://i.pinimg.com/736x/73/14/1b/73141b0e1348c4d4a7de8c50b8c56c3f.jpg" alt="HTML, CSS, JS" />
          </div>
          <div className="slider-item">
            <img src="https://i.pinimg.com/236x/dd/9c/e0/dd9ce009dcbf2648e8d7bae8dd5c86ea.jpg" alt="React" />
          </div>
          <div className="slider-item">
            <img src="https://i.pinimg.com/236x/ef/6e/53/ef6e533c24b6cb68bb3d9cf9de2f2e23.jpg" alt="Vue" />
          </div>
          <div className="slider-item">
            <img src="https://i.pinimg.com/236x/b7/95/ac/b795aca8f3911c6e0fedc879d7dc2979.jpg" alt="Angular" />
          </div>
        </Slider>
      </div>

      {/* Tab Section */}
      <div className="tabs-section">
        <div className="tabs">
          <button
            className={activeTab === "html" ? "active" : ""}
            onClick={() => setActiveTab("html")}
          >
            HTML
          </button>
          <button
            className={activeTab === "css" ? "active" : ""}
            onClick={() => setActiveTab("css")}
          >
            CSS
          </button>
          <button
            className={activeTab === "js" ? "active" : ""}
            onClick={() => setActiveTab("js")}
          >
            JavaScript
          </button>
          <button
            className={activeTab === "react" ? "active" : ""}
            onClick={() => setActiveTab("react")}
          >
            React.js
          </button>
          <button
            className={activeTab === "vue" ? "active" : ""}
            onClick={() => setActiveTab("vue")}
          >
            Vue.js
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "html" && (
            <div>
              <h2>HTML - HyperText Markup Language</h2>
              <p>HTML is the backbone of web pages. It structures content using elements like headings, paragraphs, links, and images.</p>
            </div>
          )}
          {activeTab === "css" && (
            <div>
              <h2>CSS - Cascading Style Sheets</h2>
              <p>CSS is used for styling web pages, including layouts, colors, and animations.</p>
            </div>
          )}
          {activeTab === "js" && (
            <div>
              <h2>JavaScript - Programming for the Web</h2>
              <p>JavaScript makes web pages interactive by handling events, animations, and API integrations.</p>
            </div>
          )}
          {activeTab === "react" && (
            <div>
              <h2>React.js - Modern Frontend Development</h2>
              <p>React is a JavaScript library used to build dynamic, component-based applications.</p>
            </div>
          )}
          {activeTab === "vue" && (
            <div>
              <h2>Vue.js - Lightweight and Fast</h2>
              <p>Vue is a progressive framework that enables smooth UI development with a reactive data model.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
