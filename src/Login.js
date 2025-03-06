import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();






    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", formData);
            localStorage.setItem("token", res.data.token);
            alert("Login Successful");
            navigate("/");
        } catch (err) {
            alert("Login Failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="login-input"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="login-input"
                        onChange={handleChange}
                    />
                    <button className="login-btn">Login</button>
                </form>
               
            </div>
        </div>
    );
};

export default Login;