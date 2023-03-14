module.exports = (sequelize, Sequelize) => {
    const Utente = sequelize.define("utente", {
      num_sequencial: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sexo: {
        type: Sequelize.STRING
      },
      nome_utente: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATEONLY
      }
    }, 
    {freezeTableName: true
    });

    return Utente;
  };