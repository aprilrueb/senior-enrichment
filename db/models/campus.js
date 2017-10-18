// - Campuses
// * have info such as a name and image
// * can have many students assigned (may have none)

const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING
    }
  }
);

module.exports = Campus;
