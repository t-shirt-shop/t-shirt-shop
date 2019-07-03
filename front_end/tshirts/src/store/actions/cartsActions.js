import axios from 'axios'

export const addToCart = (shirt) => {
	return dispatch => {
		dispatch({type: 'ADD_TO_CART_START'})
		axios.post('https://t-shirt-store123.herokuapp.com/shirt/cart', shirt)
		.then(res => {
			dispatch({type: 'ADD_TO_CART_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'ADD_TO_CART_ERROR', payload: error})
		})
	}
}

export const getUsersCartItems = () => {
	return dispatch => {
		dispatch({type: 'GET_CART_ITEMS_START'})
		axios.get('https://t-shirt-store123.herokuapp.com/shirt/cart')
		.then(res => {
			dispatch({type: 'GET_CART_ITEMS_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'GET_CART_ITEMS_ERROR', payload: error})
		})
	}
}

export const editCartItem = () => {
	return dispatch => {
		dispatch({type: 'EDIT_CART_ITEM_START'})
		axios.put('https://t-shirt-store123.herokuapp.com/shirt/cart')
		.then(res => {
			dispatch({type: 'EDIT_CART_ITEM_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'EDIT_CART_ITEM_ERROR', payload: error})
		})
	}
}

export const removeFromCart = () => {
	return dispatch => {
		dispatch({type: 'REMOVE_CART_ITEM_START'})
		axios.delete('https://t-shirt-store123.herokuapp.com/shirt/cart')
		.then(res => {
			dispatch({type: 'REMOVE_CART_ITEM_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'REMOVE_CART_ITEM_ERROR', payload: error})
		})
	}
}
