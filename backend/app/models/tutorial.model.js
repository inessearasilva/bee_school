module.exports = (sequelize, Sequelize) => {
    const Utente = sequelize.define("utente", {
      sexo: {
        type: Sequelize.STRING
      },
      nome_utente: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      }
    });
  
    return Utente;
  };