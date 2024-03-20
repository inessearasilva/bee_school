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

var corsOptions = {
  origin: "https://bee-aware-08ab5a1c994e.herokuapp.com/"
};


app.use(cors(corsOptions)); // Add this line to enable CORS

app.use(express.json());

pp.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(5050, () => {
  console.log("Server is running at port 5050");
});

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// This route should serve 'index.html' for all routes in the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
