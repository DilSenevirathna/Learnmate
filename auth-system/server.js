require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "auth_db",
});

db.connect(err => {
    if (err) {
        console.error("Database Connection Failed:", err);
    } else {
        console.log("✅ Database Connected!");
    }
});

// Register route
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        console.error("Validation Error: Missing Fields");
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        console.log("🔄 Hashing password...");
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("📥 Inserting user into database...");
        db.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
            [username, email, hashedPassword], 
            (err, result) => {
                if (err) {
                    console.error("❌ Database Insert Error:", err.sqlMessage || err);
                    return res.status(500).json({ message: "Database Error: " + (err.sqlMessage || "Unknown error") });
                }
                console.log("✅ User registered successfully!");
                res.status(201).json({ message: "User Registered Successfully" });
            }
        );
    } catch (err) {
        console.error("❌ Unexpected Server Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
});


// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    console.log("🔍 Checking user credentials...");
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
            console.error("❌ Database Query Error:", err);
            return res.status(500).json({ message: "Database Error" });
        }
        if (results.length === 0) {
            console.warn("⚠️ Invalid email:", email);
            return res.status(401).json({ message: "Invalid Email" });
        }

        console.log("🔑 Comparing passwords...");
        const isMatch = await bcrypt.compare(password, results[0].password);
        if (!isMatch) {
            console.warn("⚠️ Incorrect password for user:", email);
            return res.status(401).json({ message: "Invalid Password" });
        }

        console.log("🔐 Generating authentication token...");
        const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });

        res.json({ 
            message: "Login successful",
            token, 
            user: { id: results[0].id, username: results[0].username, email } 
        });
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
