module.exports = app => {
  const clinicalCompositions = require("../controllers/forms.controller.js");

  var router = require("express").Router();

  // Create a new Clinical Composition
  router.post("/", clinicalCompositions.create);

  // Retrieve a single Clinical Composition with num_sequencial
  router.get("/avini/:num_sequencial", clinicalCompositions.findOneAvini);

  // Retrieve a single Clinical Composition with num_sequencial
  router.get("/avombro/:num_sequencial", clinicalCompositions.findOneAvombro);

  // Retrieve all Clinical Compositions
  router.get("/", clinicalCompositions.findAll);

  // Retrieve all Clinical Compositions
  router.get("/aviniforms/all", clinicalCompositions.findAllAvini);

  // Retrieve all Clinical Compositions
  router.get("/avombroforms/all", clinicalCompositions.findAllAvombro);

  // Update a Clinical Composition with num_sequencial
  router.put("/:idcomposition", clinicalCompositions.update);

  // Delete a Clinical Composition with num_sequencial
  router.delete("/:num_sequencial", clinicalCompositions.delete);

  // Delete all Clinical Compositions
  router.delete("/", clinicalCompositions.deleteAll);

  // Retrieve a single Composition with num_sequencial
  router.get("/valuesAvini/:num_sequencial", clinicalCompositions.findValuesAvini);

  // Retrieve a single Composition with num_sequencial
  router.get("/valuesAvombro/:num_sequencial", clinicalCompositions.findValuesAvombro);

  // Retrieve a single Composition with num_sequencial
  router.get("/subAvini/:num_sequencial", clinicalCompositions.findSubAvini);

  // Retrieve a single Composition with num_sequencial
  router.get("/subAvombro/:num_sequencial", clinicalCompositions.findSubAvombro);

  // Retrieve a single Composition with num_sequencial
  router.get("/initialAvini/:num_sequencial", clinicalCompositions.findInitialAvini);

  // Retrieve a single Composition with num_sequencial
  router.get("/initialAvombro/:num_sequencial", clinicalCompositions.findInitialAvombro);

  app.use("/api/forms", router);
};
