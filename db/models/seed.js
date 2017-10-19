var Promise = require('bluebird');
var db = require('../index');
var Student = require('./student').Student;
var Campus = require('./campus').Campus;

var data = {
  student: [
    {
      name: 'April',
      email: 'april@april.com',
      year: 'Freshman',
      major: 'Journalism'
    },
    {
      name: 'Annelise',
      email: 'annelise@annelise.com',
      year: 'Sophomore',
      major: 'Education'
    },
    {
      name: 'Caryn',
      email: 'caryn@caryn.com',
      year: 'Junior',
      major: 'Computer Science'
    },
    {
      name: 'Shelby',
      email: 'shelby@shelby.com',
      year: 'Senior',
      major: 'Visual Arts'
    },
    {
      name: 'Emily',
      email: 'emily@emily.com',
      year: 'Freshman',
      major: 'English'
    },
    {
      name: 'Renee',
      email: 'renee@renee.com',
      year: 'Sophomore',
      major: 'Neuroscience'
    }
  ],
  campus: [
    {
      name: 'New York University',
      address: '70 Washington Square South New York, NY, 10012',
      phone: '212-998-1212',
      image: '/images/nyu.jpg'
    },
    {
      name: 'Columbia University',
      address: '116th St & Broadway, New York, NY 10027',
      phone: '212-854-1754',
      image: '/images/columbia.jpg'
    },
    {
      name: 'Fordham University',
      address: '113 W 60th Street New York, NY 10023',
      phone: '212-636-6000',
      image: '/images/fordham.jpg'
    },
    {
      name: 'Fashion Institute of Technology',
      address: '227 W 27th St, New York, NY 10001',
      phone: '212-217-7999',
      image: '/images/fit.jpg'
    }
  ]
};

db
  .sync({ force: true })
  .then(function() {
    console.log('Dropped old data, now inserting data');
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item);
      });
    });
  })
  .then(function() {
    console.log('Finished inserting data');
  })
  .catch(function(err) {
    console.error('There was totally a problem', err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });

// RUN: node db/models/seed.js
