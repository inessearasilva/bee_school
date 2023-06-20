const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
let db;

async function connectToDatabase() {
  try {
    conn = await client.connect();
    db = conn.db("socialistening");
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

connectToDatabase();

module.exports = db;
