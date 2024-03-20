const express = require("express");
const { ObjectId, MongoClient } = require("mongodb");

const router = express.Router();

// Middleware function to check if the database connection is ready
async function checkDatabaseConnection(req, res, next) {
  const connectionString = process.env.ATLAS_URI || "";

  try {
    const client = new MongoClient(connectionString);
    await client.connect();
    const db = client.db("socialistening");
    req.app.locals.db = db;
    next();
  } catch (error) {
    console.error(error);
    res.status(503).send("Database connection not available");
  }
}

// ==================> Tweets <=======================

// This section will help you get a list of all the records.
router.get("/tweets", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("tweets");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// ==================> statistics_general <=======================

// This section will help you get a list of all the records.
router.get("/statistics_general", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("statistics_general");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// ==================> general_info <=======================

// This section will help you get a list of all the records.
router.get("/general_info", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("general_info");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// ==================> statistics <=======================

// This section will help you get a list of all the records.
router.get("/statistics", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("statistics");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// ==================> links <=======================

// This section will help you get a list of all the records.
router.get("/links", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("links");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});


// -----------------------------------------------------------------

// This section will help you get a single record by id
router.get("/tweets/:id", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("tweets");
  const query = { _id: new ObjectId(req.params.id) };
  const results = await collection.findOne(query);
  res.send(results).status(200);
});

module.exports = router;
