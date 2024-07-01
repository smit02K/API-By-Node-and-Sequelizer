// const { sequelize, Sequelize } = require("./db. config");
module.exports = (sequelize, Sequelize) => {
  const customers = sequelize.define("customertable", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  });
  return customers;
};
