module.exports = (sequelize, Sequelize) => {
    const ClinicalCompositions = sequelize.define("clinicalCompositions", {
      idcomposition: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idjdt: {
        type: Sequelize.INTEGER,
      },
      num_sequencial: {
        type: Sequelize.INTEGER,
        references: {
          model: 'utente', // name of the referenced table
          key: 'num_sequencial' // primary key of the referenced table
        }
      },
      version: {
        type: Sequelize.INTEGER
      },
      createdat: {
        type: Sequelize.DATE
      },
      state: {
        type: Sequelize.INTEGER
      },
      id_initialcomposition: {
        type: Sequelize.STRING
      },
      composition: {
        type: Sequelize.TEXT
      },
      reference_model: {
        type: Sequelize.JSON
      },
      isCompleted: {
        type: Sequelize.INTEGER
      } 
    }, 
    {freezeTableName: true,
      timestamps: false // disable timestamps
    });

    return ClinicalCompositions;
  };