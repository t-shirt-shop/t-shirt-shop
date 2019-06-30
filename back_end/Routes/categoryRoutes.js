const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)

//Create
//create a new category
//-------------------------------------------
router.post('', (req, res) => {
	const {category_name} = req.body;

	db.insert({category_name}).into('category')
	.then(response => {
		res.status(201).json(response)
	})
	.catch(error => {
		res.status(500).json(error)
	})
})

//READ
//get all catagories
//-------------------------------------------
router.get('', (req, res) => {
	db('category')
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		res.status(500).json(error)
	})

})


//READ
//get all tshirts by a catagory
//-------------------------------------------
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db('category')
		.join('tshirt', 'category.id', 'tshirt.category_id')
		.where({category_id: id})
		.then(response => {
			res.status(200).json(response)
		})
		.catch(error => {
			res.status(500).json(error)
		})

})

module.exports = router;
