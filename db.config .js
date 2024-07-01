const Sequelize = require("sequelize");
const dbName = "customer";
const dbUser = "TANTRASOFT";
const dbPassword = "1234";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "192.168.1.159",
  port: 3306,
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers=require('./customer.model')(sequelize,Sequelize)
//console.log(sequelize)
//console.log(Sequelize)


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


  // Sync models with the database
sequelize.sync({ force: false }) // set force to true to drop existing tables and recreate them
.then(() => {console.log('Database synchronized.');})
.catch((err) => {console.error('Unable to sync database:', err);});

module.exports = db;
