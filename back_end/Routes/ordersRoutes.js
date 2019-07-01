const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)

// Create
// create a new order
//-------------------------------------------
router.post('', (req, res) => {

	const {date, user_id, total, description} = req.body

	db.insert({date, user_id, total, total, description}).into('order')
		.then(response => {
			res.status(201).json(response)
		})
		.catch(error => {
			console.log(error)
			res.status(500).json(error)
		})

})

// Read
// get all orders from a customer
//-------------------------------------------
router.get('', (req, res) => {

	const {id} = req.body

	db('users')
		.join('order', 'users.id', 'order.user_id')
		.where({user_id: id})
		.select('date', 'total', 'description')
		.then(response => {
			console.log(response)
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(500).json(error)
		})
})

module.exports = router;
