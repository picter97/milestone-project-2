import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.commenttest2, dbConfig.Resnick1022, dbConfig.postgres, {
  host: dbConfig.env.commenttest2.cgub1iw4kin1.us-east-1.rds.amazonaws.com
  ,
  dialect: dbConfig.dialect,
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blog = require("./blog.model.js")(sequelize, Sequelize);

module.exports = db;
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
