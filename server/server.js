const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Khadar",
  database: "mamababyworld",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Register endpoint
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
   console.log(req.body)
    // if (!username || !password||!email) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }
  
    const sql = "INSERT INTO _users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error registering user" });
      }
      res.status(200).json({ message: "User registered successfully" });
    });
  });
  
  // Login endpoint
  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // if (!username || !password) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }
  
    const sql = "SELECT * FROM _users WHERE `email` = ? AND `password` = ?";
    db.query(sql, [email, password], (err, results) => {
        console.log('res',results)
      if (err) {
        return res.status(500).json({ message: "Error logging in" });
      }
  
      if (results.length > 0) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    });
  });
  
  // Start server
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
  