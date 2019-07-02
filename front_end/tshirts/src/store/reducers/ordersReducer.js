const initialState = {
	loading: false,
	error: null,
	orders: []
}

const ordersReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		case 'START_ORDER':
			return {...state, loading: true, error: null}
		case 'ORDER_SUCCESS':
			return {...state, loading: false, error: null, orders: data}
		case 'ORDR_ERROR':
			return {...state, loading: false, error: null, error: data}
		case 'START_GET_ORDER':
			return {...state, loading: true, error: null, orders: data}
		case 'GET_ORDER_SUCCESS':
			return {...state, loading: false, error: null, orders: data}
		case 'GET_ORDR_ERROR':
			return {...state, loading: false, error: data}
		default:
			return state
	}
}

export default ordersReducer