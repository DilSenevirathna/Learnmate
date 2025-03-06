// MobileDevelopment.js
// MobileDevelopment.js
// MobileDevelopment.js
// MobileDevelopment.js
// MobileDevelopment.js
import React, { useState } from "react";
import Slider from "react-slick"; // Importing react-slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MobileDevelopment.css"; // New CSS file with unique styles

const MobileDevelopment = () => {
  const [activeTab, setActiveTab] = useState("android");

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
    <div className="mobile-dev-container">
      {/* Hero Banner */}
      <div className="mobile-dev-hero">
        <div className="mobile-dev-hero-text">
          <h1>Mobile Development</h1>
          <p>Build cutting-edge mobile applications for Android and iOS.</p>
        </div>
      </div>

      {/* Image Slider */}
      <div className="mobile-dev-slider">
        <Slider {...sliderSettings}>
          <div className="mobile-dev-slide">
            <img src="https://i.pinimg.com/736x/46/5a/64/465a64fcf180b951699ca971b99a9c6f.jpg" alt="Android" />
          </div>
          <div className="mobile-dev-slide">
            <img src="https://i.pinimg.com/736x/69/8f/5a/698f5af1168251105f641b4fc8fc0da7.jpg" alt="iOS" />
          </div>
          <div className="mobile-dev-slide">
            <img src="https://i.pinimg.com/736x/5e/09/5b/5e095bbfba1055462d3cb62d71c065bd.jpg" alt="React Native" />
          </div>
          <div className="mobile-dev-slide">
            <img src="https://i.pinimg.com/736x/cd/6e/f7/cd6ef777c4882b152ecdaadc46b8b204.jpg" alt="Flutter" />
          </div>
        </Slider>
      </div>

      {/* Tab Section */}
      <div className="mobile-dev-tabs">
        <div className="mobile-dev-tab-buttons">
          <button
            className={activeTab === "android" ? "active" : ""}
            onClick={() => setActiveTab("android")}
          >
            Android
          </button>
          <button
            className={activeTab === "ios" ? "active" : ""}
            onClick={() => setActiveTab("ios")}
          >
            iOS
          </button>
          <button
            className={activeTab === "react-native" ? "active" : ""}
            onClick={() => setActiveTab("react-native")}
          >
            React Native
          </button>
          <button
            className={activeTab === "flutter" ? "active" : ""}
            onClick={() => setActiveTab("flutter")}
          >
            Flutter
          </button>
        </div>

        {/* Tab Content */}
        <div className="mobile-dev-tab-content">
          {activeTab === "android" && (
            <div>
              <h2>Android Development</h2>
              <p>Develop apps using Java, Kotlin, and Android SDK.</p>
            </div>
          )}
          {activeTab === "ios" && (
            <div>
              <h2>iOS Development</h2>
              <p>Build high-performance iOS apps using Swift and Objective-C.</p>
            </div>
          )}
          {activeTab === "react-native" && (
            <div>
              <h2>React Native</h2>
              <p>Use React and JavaScript to create cross-platform mobile applications.</p>
            </div>
          )}
          {activeTab === "flutter" && (
            <div>
              <h2>Flutter</h2>
              <p>Build natively compiled apps with Flutter and Dart.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
