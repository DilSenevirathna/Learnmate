import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";


const Register = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending data:", formData); // Debugging
            const response = await axios.post("http://localhost:5000/register", formData);
            alert("Register Successful"); // Show success message
        } catch (err) {
            console.error("Registration Error:", err.response?.data || err);
            alert("Registration Failed: " + (err.response?.data?.message || "Server Error"));
        }
    };
    
    

    return (
        <div className="container">
            <div className="register-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" className="register-input" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="register-input" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="register-input" onChange={handleChange} required />
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <p className="register-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
