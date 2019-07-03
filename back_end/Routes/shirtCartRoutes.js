const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)


// Create
// create a new item for saved cart
//-------------------------------------------
router.post('', (req, res) => {

	const {tshirt_id, cart_id, 
		small_amount, 
		medium_amount, 
		large_amount} = req.body

	db.insert({tshirt_id, cart_id, small_amount, medium_amount, large_amount})
		.into('shirt_cart')
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(500).json(error)
		})
})

// Read
// get all items from a users shopping cart
//-------------------------------------------
router.get('/:id', (req, res) => {

	const {id} = req.params

	db('users')
		.join('shopping_cart', 'users.id', 'shopping_cart.user_id')
		.join('shirt_cart', 'shirt_cart.cart_id', 'shopping_cart.id')
		.join('tshirt', 'tshirt.id', 'shirt_cart.tshirt_id')
		.where({cart_id: id})
		.select('tshirt_id',
			'small_amount',
			'medium_amount', 
			'large_amount', 
			'shirt_name',
			'description',
			'price_small',
			'on_sale', 
			'price_medium', 
			'price_large', 
			'total_likes', 
			'material'
		)
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(500).json(error)
		})

})

// PUT
// update a users shopping cart
//-------------------------------------------
router.put('', (req, res) => {

	const {small_amount, medium_amount, large_amount, cart_id, tshirt_id} = req.body

	db('shirt_cart')
		.where({cart_id})
		.andWhere({tshirt_id})
		.update({small_amount, medium_amount, large_amount})
		.then(response => {
			return res.status(200).json(response)
		})
		.catch(error => {
			console.log(error)
			return res.status(200).json(error)
		})
})

// DELETE
// delete a shopping cart item
//-------------------------------------------
router.delete('', (req, res) => {

	const {cart_id, tshirt_id}  = req.body

	db('shirt_cart')
	.where({cart_id})
	.andWhere({tshirt_id})
	.del()
	.then(response => {
		return res.status(200).json(response)
	})
	.catch(error => {
		console.log(error)
		return res.status(500).json(error)
	})

})


module.exports = router;
