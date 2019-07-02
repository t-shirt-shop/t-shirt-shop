const initialState = {
	loading: false,
	error: null,
	cartItems: []
}

const cartsReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){

		case 'ADD_TO_CART_START':
			return {...state, loading: true, error: null}
		case 'ADD_TO_CART_SUCCESS':
			return {...state, loading: false, error: null, cartItems: data}
		case 'ADD_TO_CART_ERROR':
			return {...state, loading: false, error: null, error: data}

		case 'GET_CART_ITEMS_START':
			return {...state, loading: true, error: null}
		case 'GET_CART_ITEMS_SUCCESS':
			return {...state, loading: false, error: null, cartItems: data}
		case 'GET_CART_ITEMS_ERROR':
			return {...state, loading: false, error: null, error: data}

		case 'EDIT_CART_ITEM_START':
			return {...state, loading: true, error: null}
		case 'EDIT_CART_ITEM_SUCCESS':
			return {...state, loading: false, error: null, cartItems: data}
		case 'EDIT_CART_ITEM_ERROR':
			return {...state, loading: false, error: null, error: data}

	  case 'REMOVE_CART_ITEM_START':
			return {...state, loading: true, error: null}
		case 'REMOVE_CART_ITEM_SUCCESS':
			return {...state, loading: false, error: null, cartItems: data}
		case 'REMOVE_CART_ITEM_ERROR':
			return {...state, loading: false, error: null, error: data}

		default:
			return state
	}
}

export default cartsReducer