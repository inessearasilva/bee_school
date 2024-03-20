const express = require("express");
const mongoose = require("mongoose");
const Router = require("./app/routes/tweets")
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {
  origin: "https://bee-aware-08ab5a1c994e.herokuapp.com/"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// This route should serve 'index.html' for all routes in the frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
