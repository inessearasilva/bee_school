const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI || "";

// Load the SSL certificate files
const ca = [fs.readFileSync("/path/to/ca.pem")]; // Replace "/path/to/ca.pem" with the path to your CA certificate file

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Enable SSL
  sslCA: ca, // Specify the CA certificate
});


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