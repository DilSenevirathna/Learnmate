// Navbar.js
// Navbar.js
// Navbar.js
// Navbar.js
// Navbar.js
// Navbar.js
// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">WELCOME TO LEARNMATE</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="coursesDropdown" role="button" onClick={toggleDropdown} aria-expanded={dropdownOpen}>
                            Courses+
                        </NavLink>
                       
                        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="coursesDropdown">
                        &nbsp;&nbsp;&nbsp;
                            <li><NavLink className="dropdown-item" to="/courses/Mobile-Development">📱 Mobile Development</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            &nbsp;&nbsp;&nbsp;
                            <li><NavLink className="dropdown-item" to="/courses/Backend">🤖 Backend</NavLink></li>
                            &nbsp;&nbsp;&nbsp;
                            <li><NavLink className="dropdown-item" to="/courses/Frontend">🖥️ Frontend</NavLink></li>
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                    </li>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register"><i className="fas fa-user-plus"></i></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login"><i className="fas fa-sign-in-alt"></i></NavLink>
                    </li>
                </ul>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
