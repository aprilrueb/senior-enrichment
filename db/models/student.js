// - Students
// * have profile info (e.g. name and email)
// * must be assigned to a campus

const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      isEmail: true
    }
  }
);

module.exports = Student;
