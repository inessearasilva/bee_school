const express = require("express");
const mongoose = require("mongoose");
const Router = require("./app/routes/tweets")
const cors = require("cors");

const app = express();

app.use(express.json());

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

app.listen(5050, () => {
  console.log("Server is running at port 5050");
});
