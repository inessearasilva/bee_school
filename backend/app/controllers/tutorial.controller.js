const db = require("../models");
const Utente = db.utente;
const Op = db.Sequelize.Op;

// Create and Save a new Patient
exports.create = (req, res) => {
    // Valnum_sequencialate request
    if (!req.body.nome_utente) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Patient
    const utente = {
      sexo: req.body.sexo,
      nome_utente: req.body.nome_utente,
      data_nascimento: req.body.data_nascimento ? new Date(req.body.data_nascimento) : null
    };
  
    // Save Patient in the database
    Utente.create(utente)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Patient."
        });
      });
  };

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  const nome_utente = req.query.nome_utente;
  var condition = nome_utente ? { nome_utente: { [Op.iLike]: `%${nome_utente}%` } } : null;

  Utente.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patients."
      });
    });
};

// Find a single Patient with an num_sequencial
exports.findOne = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  Utente.findByPk(num_sequencial)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Patient with num_sequencial=${num_sequencial}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Patient with num_sequencial=" + num_sequencial
      });
    });
};

// Update a Patient by the num_sequencial in the request
exports.update = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  Utente.update(req.body, {
    where: { num_sequencial: num_sequencial }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Patient was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update patient with num_sequencial=${num_sequencial}. Maybe patient was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Patient with num_sequencial=" + num_sequencial
      });
    });
};

// Delete a Patient with the specified num_sequencial in the request
exports.delete = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  Utente.destroy({
    where: { num_sequencial: num_sequencial }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Patient was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Patient with num_sequencial=${num_sequencial}. Maybe Patient was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Utente with num_sequencial=" + num_sequencial
      });
    });
};

// Delete all Patients from the database.
exports.deleteAll = (req, res) => {
  Utente.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Patients were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all patients."
      });
    });
};
