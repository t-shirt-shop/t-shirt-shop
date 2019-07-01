const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)

// Get
// get users shopping cart
//-------------------------------------------
router.get('', (req, res) => {

	const {user_id} = req.body

	db('shopping_cart') 
		.where({user_id})
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(200).json(error)
		})

})


module.exports = router;