module.exports = app => {
  const clinicalCompositions = require("../controllers/forms.controller.js");

  var router = require("express").Router();

  // Create a new Clinical Composition
  router.post("/", clinicalCompositions.create);

  // Retrieve a single Clinical Composition with num_sequencial
  router.get("/:num_sequencial", clinicalCompositions.findOne);

  // Retrieve all Clinical Compositions
  router.get("/", clinicalCompositions.findAll);

  // Retrieve all Clinical Compositions
  router.get("/avinilist/all", clinicalCompositions.findAllAvini);

  // Retrieve all Clinical Compositions
  router.get("/avombrolist/all", clinicalCompositions.findAllAvombro);

  // Update a Clinical Composition with num_sequencial
  router.put("/:id_initialcomposition", clinicalCompositions.update);

  // Delete a Clinical Composition with num_sequencial
  router.delete("/:num_sequencial", clinicalCompositions.delete);

  // Delete all Clinical Compositions
  router.delete("/", clinicalCompositions.deleteAll);

  // Retrieve a single Composition with num_sequencial
  router.get("/values/:num_sequencial", clinicalCompositions.findValues);

  // Retrieve a single Composition with num_sequencial
  router.get("/initial/:num_sequencial", clinicalCompositions.findInitial);

  // Retrieve a single Composition with num_sequencial
  router.get("/submitted/:idcomposition/:num_sequencial", clinicalCompositions.findSub);

  // Retrieve a single Composition with num_sequencial
  router.get("/viz/:idcomposition/:num_sequencial", clinicalCompositions.viz);

  app.use("/api/forms", router);
};
