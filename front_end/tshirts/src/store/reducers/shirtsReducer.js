const initialState = {
	loading: false,
	error: null,
	shirts: []
}

const shirtsReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		case 'GET_BY_CATEGORY_START':
			return {...state, loading: true, error: null}
		case 'GET_BY_CATEGORY_SUCCESS':
			return {...state, loading: false, error: null, shirts: data}
		case 'GET_BY_CATEGORY_ERROR':
			return {...state, loading: false, error: null, error: data}
		default:
			return state
	}
}

export default shirtsReducer