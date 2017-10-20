'use strict';
const api = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

api.route('/campuses')
	.get((req, res, next) => {
		Campus.findAll()
			.then(campuses => res.json(campuses))
			.catch(next);
	})
	.post((req, res, next) => {
		Campus.create({
			name: req.body.name,
			image: req.body.image
		})
			.then(campus => res.status(201).json(campus))
			.catch(next);
	});

api.route('/campuses/:id')
	.get((req, res, next) => {
		Campus.findById(req.params.id, {include: {all: true}})
			.then(campus => res.json(campus))
			.catch(next);
	})
	.put((req, res, next) => {
		Campus.findById(req.params.id)
			.then(campus => campus.update({
				name: req.body.name,
				image: req.body.email
			}))
			.then(updatedCampus => res.json(updatedCampus))
			.catch(next);
	})
	.delete((req, res, next) => {
		Campus.findById(req.params.id)
			.then(campus => campus.destroy())
			.then(() => res.sendStatus(204))
			.catch(next);
	});

api.route('/students')
	.get((req, res, next) => {
		Student.findAll()
			.then(students => res.json(students))
			.catch(next);
	})
	.post((req, res, next) => {
		Student.create({
			name: req.body.name,
			email: req.body.email
		})
			.then(student => res.status(201).json(student))
			.catch(next);
	});

api.route('/students/:id')
	.get((req, res, next) => {
		Student.findById(req.params.id)
			.then(student => res.json(student))
			.catch(next);
	})
	.put((req, res, next) => {
		Student.findById(req.params.id)
			.then(student => student.update({
				name: req.body.name,
				email: req.body.email
			}))
			.then(updatedStudent => res.json(updatedStudent))
			.catch(next);
	})
	.delete((req, res, next) => {
		Student.findById(req.params.id)
			.then(student => student.destroy())
			.then(() => res.sendStatus(204))
			.catch(next);
	});

module.exports = api;
