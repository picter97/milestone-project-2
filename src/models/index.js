const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.commenttest2, dbConfig.Resnick1022, dbConfig.postgres, {
  host: "dbConfig.env.commenttest2.cgub1iw4kin1.us-east-1.rds.amazonaws.com",
  dialect: dbConfig.dialect,
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.blog = require("./blog.model.js")(sequelize, Sequelize);

module.exports = db;