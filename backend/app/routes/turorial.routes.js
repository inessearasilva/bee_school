module.exports = app => {
    const utente = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", utente.create);
  
    // Retrieve all utente
    router.get("/", utente.findAll);
  
    // Retrieve a single Tutorial with num_sequencial
    router.get("/:num_sequencial", utente.findOne);
  
    // Update a Tutorial with num_sequencial
    router.put("/:num_sequencial", utente.update);
  
    // Delete a Tutorial with num_sequencial
    router.delete("/:num_sequencial", utente.delete);
  
    // Delete all utente
    router.delete("/", utente.deleteAll);
  
    app.use("/api/utente", router);
  };