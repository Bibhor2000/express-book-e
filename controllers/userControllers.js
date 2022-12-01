const express = require('express');
const router = express.Router();
const User = require('../models/User');

//GET all users
router.get('/', async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

//GET one user
router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

//Create a user 
router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
});


module.exports = router;