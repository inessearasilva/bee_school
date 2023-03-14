const db = require("../models");
const ClinicalCompositions = db.clinicalCompositions;
const Utente = db.utente;
const Op = db.Sequelize.Op;
const { Sequelize } = require('sequelize');

// Create and Save a new Form
exports.create = (req, res) => {
  // Validate request
  if (!req.body.num_sequencial) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Check if there is an existing form with the same num_sequencial
  ClinicalCompositions.findOne({
    where: {
      num_sequencial: req.body.num_sequencial
    },
    order: [['createdat', 'DESC']]
  }).then(async (existingForm) => {
    if (existingForm) {
      // Check if the existing form is not completed
      if (existingForm.isCompleted === 0) {
        // Update the existing form
        const updatedForm = {
          idjdt: req.body.idjdt,
          num_sequencial: req.body.num_sequencial,
          version: req.body.version,
          createdat: req.body.createdat ? new Date(req.body.createdat) : null,
          state: req.body.state,
          id_initialcomposition: req.body.id_initialcomposition,
          composition: req.body.composition,
          reference_model: req.body.reference_model,
          isCompleted: req.body.isCompleted
        };

        await ClinicalCompositions.update(updatedForm, {
          where: {
            id_initialcomposition: req.body.id_initialcomposition,
            num_sequencial: req.body.num_sequencial,
            idjdt: req.body.idjdt
          }
        }).then(() => {
          console.log("Updated existing form");
        }).catch((err) => {
          console.log("Error while updating existing form:", err);
        });

        res.send("Updated existing form");
        return;
      }
    }

    // Create a new form
    const newForm = {
      idjdt: req.body.idjdt,
      num_sequencial: req.body.num_sequencial,
      version: req.body.version,
      createdat: req.body.createdat ? new Date(req.body.createdat) : null,
      state: req.body.state,
      id_initialcomposition: req.body.id_initialcomposition,
      composition: req.body.composition,
      reference_model: req.body.reference_model,
      isCompleted: req.body.isCompleted
    };

    ClinicalCompositions.create(newForm)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Form."
        });
      });
  });
};


// Find a single Clinical Composition with an num_sequencial
exports.findOneAvini = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({ where: { num_sequencial: num_sequencial, idjdt:0 }, order: [['createdat', 'DESC']] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Clinical Composition with num_sequencial=${num_sequencial}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
      });
    });
};

// Find a single Clinical Composition with an num_sequencial
exports.findOneAvombro = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({ where: { num_sequencial: num_sequencial, idjdt:1 }, order: [['createdat', 'DESC']] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Clinical Composition with num_sequencial=${num_sequencial}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
      });
    });
};

// Retrieve all Forms from the database.

/*
exports.findAll = (req, res) => {
    const num_sequencial = req.query.num_sequencial;
    var condition = num_sequencial ? { num_sequencial: { [Op.iLike]: `%${num_sequencial}%` } } : null;
  
    ClinicalCompositions.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving patients."
        });
      });
  };*/

  exports.findAll = (req, res) => {
    const idcomposition = req.query.idcomposition;
    const isCompleted = req.query.isCompleted;
    const num_sequencial = req.query.num_sequencial;
    
    var condition = {
      idcomposition: idcomposition ? { [Op.eq]: idcomposition } : undefined,
      isCompleted: isCompleted ? { [Op.eq]: isCompleted } : undefined,
      num_sequencial: num_sequencial ? { [Op.eq]: num_sequencial } : undefined,
    };
  
    // Remove any undefined values from the condition object
    condition = Object.fromEntries(Object.entries(condition).filter(([_, v]) => v !== undefined));
  
    ClinicalCompositions.findAll({ where: condition })
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

  exports.findAllAvini = (req, res) => {
    const idcomposition = req.query.idcomposition;
    const id_initialcomposition = req.query.id_initialcomposition;
    const isCompleted = req.query.isCompleted;
    const num_sequencial = req.query.num_sequencial;
    const createdat = req.query.createdat;
  
    var condition = {
      idcomposition: idcomposition ? { [Op.eq]: idcomposition } : undefined,
      id_initialcomposition: id_initialcomposition ? { [Op.eq]: id_initialcomposition } : undefined,
      isCompleted: isCompleted ? { [Op.eq]: isCompleted } : undefined,
      num_sequencial: num_sequencial ? { [Op.eq]: num_sequencial } : undefined,
      createdat: createdat ? { [Op.eq]: createdat } : undefined,
      idjdt: 0 // add condition for idjdt = 0
    };
  
    // Remove any undefined values from the condition object
    condition = Object.fromEntries(Object.entries(condition).filter(([_, v]) => v !== undefined));
  
    ClinicalCompositions.findAll({ where: condition, order: [['idcomposition', 'ASC']],
    include: [
      {
        model: Utente, as: 'utente',
        attributes: ['nome_utente']
      }
    ]
  })
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
  
  

  exports.findAllAvombro = (req, res) => {
    const idcomposition = req.query.idcomposition;
    const id_initialcomposition = req.query.id_initialcomposition;
    const isCompleted = req.query.isCompleted;
    const num_sequencial = req.query.num_sequencial;
    const createdat = req.query.createdat;
  
    var condition = {
      idcomposition: idcomposition ? { [Op.eq]: idcomposition } : undefined,
      id_initialcomposition: id_initialcomposition ? { [Op.eq]: id_initialcomposition } : undefined,
      isCompleted: isCompleted ? { [Op.eq]: isCompleted } : undefined,
      num_sequencial: num_sequencial ? { [Op.eq]: num_sequencial } : undefined,
      createdat: createdat ? { [Op.eq]: createdat } : undefined,
      idjdt: 1 // add condition for idjdt = 1
    };
  
    // Remove any undefined values from the condition object
    condition = Object.fromEntries(Object.entries(condition).filter(([_, v]) => v !== undefined));
  
    ClinicalCompositions.findAll({ where: condition, order: [['idcomposition', 'ASC']],
    include: [
      {
        model: Utente, as: 'utente',
        attributes: ['nome_utente']
      }
    ] })
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
  


// Update a Patient by the num_sequencial in the request
exports.update = (req, res) => {
  const idcomposition = req.params.idcomposition;

  ClinicalCompositions.update(req.body, {
    where: { idcomposition: idcomposition }, order: [['createdat', 'DESC']]
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Form was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update form with id_inititalcomposition=${idcomposition}. Maybe form was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating form with id_initialcomposition=" + idcomposition
      });
    });
};

// Delete a Patient with the specified num_sequencial in the request
exports.delete = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.destroy({
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
        message: "Could not delete ClinicalCompositions with num_sequencial=" + num_sequencial
      });
    });
};

// Delete all Patients from the database.
exports.deleteAll = (req, res) => {
  ClinicalCompositions.destroy({
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

exports.findValuesAvini = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({
    where: { 
      num_sequencial: num_sequencial, idjdt:0
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data) {
      const composition = data.isCompleted === 0 ? data : null;
      const mostRecentComposition = data;

      if (composition) {
        console.log('Found the most recent ClinicalComposition with isCompleted=0');
        console.log('composition:', composition.composition);
        res.status(200).send({ num_sequencial: composition.num_sequencial, composition: composition.composition });
      } else if (mostRecentComposition.isCompleted === 1) {
        console.log('Found a more recent ClinicalComposition with isCompleted=1');
        res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: null });
      } else {
        res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: null });
      }
    } else {
      res.status(200).send({ num_sequencial: num_sequencial, composition: null });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};


exports.findSubAvini = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findAll({
    where: { 
      num_sequencial: num_sequencial, idjdt:0
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data && data.length > 0) {
      const mostRecentComposition = data[0];
      console.log('Found the most recent ClinicalComposition');
      console.log('composition:', mostRecentComposition.composition);
      res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: mostRecentComposition.composition, createdat: mostRecentComposition.createdat, isCompleted: mostRecentComposition.isCompleted });
    } else {
      res.status(200).send({ num_sequencial: num_sequencial, composition: null, createdat: null, isCompleted: null });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};


exports.findValuesAvombro = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({
    where: { 
      num_sequencial: num_sequencial, idjdt:1
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data) {
      const composition = data.isCompleted === 0 ? data : null;
      const mostRecentComposition = data;

      if (composition) {
        console.log('Found the most recent ClinicalComposition with isCompleted=0');
        console.log('composition:', composition.composition);
        res.status(200).send({ num_sequencial: composition.num_sequencial, composition: composition.composition });
      } else if (mostRecentComposition.isCompleted === 1) {
        console.log('Found a more recent ClinicalComposition with isCompleted=1');
        res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: null });
      } else {
        res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: null });
      }
    } else {
      res.status(200).send({ num_sequencial: num_sequencial, composition: null });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};


exports.findSubAvombro = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findAll({
    where: { 
      num_sequencial: num_sequencial, idjdt:1
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data && data.length > 0) {
      const mostRecentComposition = data[0];
      console.log('Found the most recent ClinicalComposition');
      console.log('composition:', mostRecentComposition.composition);
      res.status(200).send({ num_sequencial: mostRecentComposition.num_sequencial, composition: mostRecentComposition.composition, createdat: mostRecentComposition.createdat, isCompleted: mostRecentComposition.isCompleted });
    } else {
      res.status(200).send({ num_sequencial: num_sequencial, composition: null, createdat: null, isCompleted: null });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};

exports.findInitialAvini = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({
    where: { 
      num_sequencial: num_sequencial, idjdt:0
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data) {
      const initialComposition = data.isCompleted === 0 ? data : null;
      const mostRecentComposition = data;

      if (initialComposition) {
        console.log('Found the most recent ClinicalComposition with isCompleted=0');
        console.log('id_initialcomposition:', initialComposition.id_initialcomposition);
        res.status(200).send({ id_initialcomposition: initialComposition.id_initialcomposition });
      } else if (mostRecentComposition.isCompleted === 1) {
        console.log('Found a more recent ClinicalComposition with isCompleted=1');
        console.log('Generating random number...');
        const randomNumber = Math.floor(Math.random() * 1000);
        console.log('randomNumber:', randomNumber);
        res.status(200).send({ id_initialcomposition: randomNumber });
      } else {
        const randomNum = Math.floor(Math.random() * 1000);
        res.status(200).send({ id_initialcomposition: randomNum });
      }
    } else {
      const randomNum = Math.floor(Math.random() * 1000);
      res.status(200).send({ id_initialcomposition: randomNum });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};


exports.findInitialAvombro = (req, res) => {
  const num_sequencial = req.params.num_sequencial;

  ClinicalCompositions.findOne({
    where: { 
      num_sequencial: num_sequencial, idjdt:1
    },
    order: [['createdat', 'DESC']]
  }).then(data => {
    if (data) {
      const initialComposition = data.isCompleted === 0 ? data : null;
      const mostRecentComposition = data;

      if (initialComposition) {
        console.log('Found the most recent ClinicalComposition with isCompleted=0');
        console.log('id_initialcomposition:', initialComposition.id_initialcomposition);
        res.status(200).send({ id_initialcomposition: initialComposition.id_initialcomposition });
      } else if (mostRecentComposition.isCompleted === 1) {
        console.log('Found a more recent ClinicalComposition with isCompleted=1');
        console.log('Generating random number...');
        const randomNumber = Math.floor(Math.random() * 1000000);
        console.log('randomNumber:', randomNumber);
        res.status(200).send({ id_initialcomposition: randomNumber });
      } else {
        const randomNum = Math.floor(Math.random() * 1000);
        res.status(200).send({ id_initialcomposition: randomNum });
      }
    } else {
      const randomNum = Math.floor(Math.random() * 1000);
      res.status(200).send({ id_initialcomposition: randomNum });
    }
  }).catch(err => {
    console.log(err); // log the error message
    res.status(500).send({
      message: "Error retrieving Clinical Composition with num_sequencial=" + num_sequencial
    });
  });
};
