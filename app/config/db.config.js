module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "a2083ines",
    DB: "teste",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };