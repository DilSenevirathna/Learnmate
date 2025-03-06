// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Courses from './Courses';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import MobileDevelopment from './courses/MobileDevelopment';
import Backend from './courses/Backend';
import Frontend from './courses/Frontend';
import Navbar from './Navbar'; 
import Footer from './Footer';
// Importing FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <Router>
            {/* Include Navbar to be displayed on all pages */}
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/courses/Mobile-development" element={<MobileDevelopment />} />
                    <Route path="/courses/Backend" element={<Backend />} />
                    <Route path="/courses/Frontend" element={<Frontend />} />
                </Routes>
            </div>
            {/* Include Footer to be displayed on all pages */}
            <Footer />
        </Router>
    );
}

export default App;
