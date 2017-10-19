// - Students
// * have profile info (e.g. name and email)
// * must be assigned to a campus

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
