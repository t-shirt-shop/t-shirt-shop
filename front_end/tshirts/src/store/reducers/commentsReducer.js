const initialState = {
	loading: false,
	error: null,
	comments: []
}

const commentsReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		
		case 'START_COMMENT_CREATE':
			return {...state, loading: true, error: null}
		case 'CREATE_COMMENT_SUCCESS':
			return {...state, loading: false, error: null, comments: data}
		case 'CREATE_COMMENT_ERROR':
			return {...state, loading: false, error: null, error: data}

		case 'START_GET_SHIRTS_COMMENTS':
			return {...state, loading: true, error: null}
		case 'SHIRTS_COMMENTS_SUCCESS':
			return {...state, loading: false, error: null, comments: data}
		case 'SHIRTS_COMMENTS_ERROR':
			return {...state, loading: false, error: data}

		case 'EDIT_COMMENT_START':
			return {...state, loading: true, error: null}
		case 'EDIT_COMMENT_SUCCESS':
			return {...state, loading: false, error: null, comments: data}
		case 'EDIT_COMMENT_ERROR':
			return {...state, loading: false, error: data}

		case 'DELETE_COMMENT_START':
			return {...state, loading: true, error: null}
		case 'DELETE_COMMENT_SUCCESS':
			return {...state, loading: false, error: null, comments: data}
		case 'DELETE_COMMENT_ERROR':
			return {...state, loading: false, error: data}
			
		default:
			return state
	}
}

export default commentsReducer