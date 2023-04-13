const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.utente = require("./tutorial.model.js")(sequelize, Sequelize);

db.clinicalCompositions = require("./forms.js")(sequelize, Sequelize);

db.utente.hasMany(db.clinicalCompositions, {
  foreignKey: 'num_sequencial'
});

db.clinicalCompositions.belongsTo(db.utente, { foreignKey: 'num_sequencial', as: 'utente' });

module.exports = db;