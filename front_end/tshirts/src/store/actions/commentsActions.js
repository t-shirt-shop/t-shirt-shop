import axios from 'axios'

export const createComment = (comment) => {
	return dispatch => {
		dispatch({type: 'START_COMMENT_CREATE'})
		axios.post(`https://t-shirt-store123.herokuapp.com/comments`, comment)
		.then(res => {
			dispatch({type: 'CREATE_COMMENT_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'CREATE_COMMENT_ERROR', payload: error})
		})
	}
}

export const getShirtsComments = (shirt_id) => {
	return dispatch => {
		dispatch({type: 'START_GET_SHIRTS_COMMENT'})
		axios.get(`https://t-shirt-store123.herokuapp.com/comments/shirts/${shirt_id}`)
		.then(res => {
			dispatch({type: 'SHIRTS_COMMENTS_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'SHIRTS_COMMENTS_ERROR', payload: error})
		})
	}
}

export const editComment = (comment_id, comment) => {
	return dispatch => {
		dispatch({type: 'EDIT_COMMENT_START'})
		axios.put(`https://t-shirt-store123.herokuapp.com/comments/${comment_id}`, comment )
		.then(res => {
			dispatch({type: 'EDIT_COMMENT_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'EDIT_COMMENT_ERROR', payload: error})
		})
	}
}


export const deleteComment = (comment_id) => {
	return dispatch => {
		dispatch({type: 'DELETE_COMMENT_START'})
		axios.delete(`https://t-shirt-store123.herokuapp.com/comments/${comment_id}`)
		.then(res => {
			dispatch({type: 'DELETE_COMMENT_SUCCESS', payload: res.data})
		})
		.catch(error => {
			dispatch({type: 'DELETE_COMMENT_ERROR', payload: error})
		})
	}
}
