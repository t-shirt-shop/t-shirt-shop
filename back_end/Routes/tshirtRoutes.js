const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)

let getBody = (body) => {
	const {shirt_name, 
		description,
		category_id,
		instock_small,
		instock_medium,
		instock_large,
		price_small,
		price_medium,
		price_large,
		on_sale,
		sale_percent,
		material,
		total_likes
	} = body
	return body
}

//Create
//create a new tshirt
//-------------------------------------------
router.post('', (req, res) => {

	let body = getBody(req.body)

	db.insert(body).into('tshirt')
	.then(response => {
		res.status(201).json(response)
	})
	.catch(error => {
		res.status(500).json(error)
	})
})

//READ
//get a particular t-shirt
//-------------------------------------------
router.get('/:id', (req, res) => {

	const { id } = req.params;

	db('tshirt')
		.where({id})
		.then(response => {
			res.status(200).json(response)
		})
		.catch(error => {
			res.status(500).json(error)
		})
})

//DELETE
//delete a tshirt from the inventory
router.delete('/:id', (req, res) => {

	const { id } = req.params

	db('tshirt')
		.where({id})
		.del()
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			return res.status(500).json(error)
		})
})


//PUT
//update a tshirt from the inventory
router.put('/:id', (req, res) => {

	let body = getBody(req.body)
	const { id } = req.params;
	console.log(body)

	db('tshirt')
		.where({id})
		.update(body)
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(500).json(error)
		})
})

module.exports = router;