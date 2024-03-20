const express = require("express");
const mongoose = require("mongoose");
const Router = require("./app/routes/tweets")
const cors = require("cors");
const path = require('path');

const app = express();

// Set CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace * with your allowed origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use(cors()); // Add this line to enable CORS

require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

const PORT = process.env.PORT || 5050; // Use the port provided by Heroku or default to 5050

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// This route should serve 'index.html' for all routes in the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
