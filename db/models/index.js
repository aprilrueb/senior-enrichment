'use strict';

/*
[x] Require all the models
[x] Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
[x] This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
[x] This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere
[x] This is also probably a good place for you to set up your associations
*/

const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus);
// Places campusId column on student rows
// Allows student.getCampus/setCampus/removeCampus

Campus.hasMany(Student);
// Places campusId column on student rows
// Allows campus.getStudent(s)/campus.setStudent(s)/addStudent(s)

module.exports = {
  Student: Student,
  Campus: Campus
};
