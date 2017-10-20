const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true
    },
    year: {
      type: Sequelize.STRING
    },
    major: {
      type: Sequelize.STRING
    }
  }
);

module.exports = Student;
