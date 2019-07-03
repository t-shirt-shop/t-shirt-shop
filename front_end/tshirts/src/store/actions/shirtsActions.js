import axios from 'axios'

export const shirtsByCategory = (id) => {
	return dispatch => {
		dispatch({type: 'GET_BY_CATEGORY_START'})
		axios.get(`https://t-shirt-store123.herokuapp.com/category/${id}`)
		.then(res => {
			dispatch({type: 'GET_BY_CATEGORY_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'GET_BY_CATEGORY_ERROR', payload: error})
		})
	}
}

export const getSingleShirt = (id) => {
	return dispatch => {
		dispatch({type: 'GET_SINGLE_SHIRT'})
		axios.get(`https://t-shirt-store123.herokuapp.com/tshirts/${id}`)
		.then(res => {
			dispatch({type: 'GET_SINGLE_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'GET_SINGLE_ERROR', payload: error})
		})
	}
}

export const getAllCatagories = () => {
	return dispatch => {
		dispatch({type: 'GET_CATEGORY_START'})
		axios.get(`https://t-shirt-store123.herokuapp.com/category`)
		.then(res => {
			dispatch({type: 'GET_CATEGORY_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'GET_CATEGORY_ERROR', payload: error})
		})
	}
}