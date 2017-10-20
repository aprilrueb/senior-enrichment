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
      address: '70 Washington Square South, New York, New York, 10012',
      phone: '212-998-1212',
      image: '/images/nyu.jpg'
    },
    {
      name: 'Columbia University',
      address: '116th Street and Broadway, New York, New York 10027',
      phone: '212-854-1754',
      image: '/images/columbia.jpg'
    },
    {
      name: 'Fordham University',
      address: '113 West 60th Street, New York, New York 10023',
      phone: '212-636-6000',
      image: '/images/fordham.jpg'
    },
    {
      name: 'Fashion Institute of Technology',
      address: '227 West 27th Street, New York, New York 10001',
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
    db.close();
    console.log('connection closed');
    return null;
  });

// RUN: node db/models/seed.js
