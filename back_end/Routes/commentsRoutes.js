const express = require('express');
const router = express.Router();
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const dbConfig = require('../knexfile')[environment]
const db = knex(dbConfig)

// Create
// create a new comment
//-------------------------------------------
router.post('', (req, res) => {
	const {date, description, image, tshirt_id} = req.body
	db.insert({date, description, image, tshirt_id}).into('comments')
	.then(response => {
		res.status(200).json(response)
	})
	.catch(error => {
		console.log(error)
		res.status(500).json(error)
	})
})

// GET
// get all comments for a tshirt
//-------------------------------------------
router.get('/shirts/:id', (req, res) => {

	const {id} = req.params

	db('tshirt')
		.join('comments', 'tshirt.id', 'comments.tshirt_id')
		.where({tshirt_id: id})
		.then(response => {

			let ar = []

			for (let i = 0; i < response.length; i++){
				const {posted_by, image, date, description} = response[i]
				ar.push({posted_by, image, date, description})
			}

			res.status(200).json(ar)
		})
		.catch(error => {
			console.log(error)
			res.status(500).json(error)
		})
})

// PUT
// update a comment
//-------------------------------------------
router.put('/:id', (req, res) => {

	const { id } = req.params 
	const {description, image} = req.body

	db('comments')
		.where({id})
		.update({description, image})
		.then(response => {
			res.status(200).json(response)
		})
		.catch(error => {
			res.status(500).json(error)
		})

})

// Delete
// delete a comment
//-------------------------------------------
router.delete('/:id', (req, res) => {
	const { id } = req.params
	db('comments')
		.where({id})
		.del()
		.then(response => {
			res.status(200).json(response)
		})
		.catch(error => {
			res.status(500).json(error)
		})
})


module.exports = router;
