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


// This section will help you get a list of all the records.
router.get("/tweets", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("tweets");
  const results = await collection.find({}).toArray();
  res.send(results).status(200);
});


// This section will help you get a single record by id
router.get("/tweets/:id", checkDatabaseConnection, async (req, res) => {
  const db = req.app.locals.db;
  const collection = db.collection("tweets");
  const query = { _id: new ObjectId(req.params.id) };
  const results = await collection.findOne(query);
  res.send(results).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = await db.collection("tweets");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };

  let collection = await db.collection("tweets");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("tweets");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

module.exports = router;
