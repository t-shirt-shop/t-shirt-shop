import axios from 'axios'

export const createOrder = (order) => {
	return dispatch => {
		dispatch({type: 'START_ORDER'})
		axios.post(`https://t-shirt-store123.herokuapp.com/orders`, order)
		.then(res => {
			dispatch({type: 'ORDER_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'ORDR_ERROR', payload: error})
		})
	}
}

export const getOrders = (id) => {
	return dispatch => {
		dispatch({type: 'START_GET_ORDER'})
		axios.get(`https://t-shirt-store123.herokuapp.com/orders`, id)
		.then(res => {
			dispatch({type: 'GET_ORDER_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'GET_ORDR_ERROR', payload: error})
		})
	}
}
