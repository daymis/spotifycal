const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  name: Sequelize.STRING,
  date: Sequelize.STRING,
  description: Sequelize.TEXT
});

module.exports = Event;