const initialState = {
	loading_shirts: false,
	loading_categories: false,
	error: null,
	shirts: [],
	catagories: []
}

const shirtsReducer = (state = initialState, action) => {
	let data = action.payload

	switch (action.type){
		case 'GET_BY_CATEGORY_START':
			return {...state, loading_shirts: true, error: null}
		case 'GET_BY_CATEGORY_SUCCESS':
			return {...state, loading_shirts: false, error: null, shirts: data}
		case 'GET_BY_CATEGORY_ERROR':
			return {...state, loading_shirts: false, error: null, error: data}

		case 'GET_CATEGORY_START':
			return {...state, loading_categories: true, error: null}
		case 'GET_CATEGORY_SUCCESS':
			return {...state, loading_categories: false, error:null, catagories: data}
		case 'GET_CATEGORY_ERROR':
			return {...state, loading_categories: false, error: data}

		default:
			return state
	}
}

export default shirtsReducer