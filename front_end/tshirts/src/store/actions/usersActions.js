import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerNewUser = (creds) => {
    return dispatch => {
    dispatch({type: REGISTER_START })
    axios.post(`https://t-shirt-store123.herokuapp.com/users/register`, creds)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: REGISTER_FAILURE, payload: error })
    })
  }
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginUser = (creds) => {
  return dispatch => {
    dispatch({type: LOGIN_START})
    axios.post(`https://t-shirt-store123.herokuapp.com/users/login`, creds)
    .then(res => {
      localStorage.setItem(
        'token',
        res.data.token
      )
      dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: LOGIN_FAILURE, payload: error})
    })
  }
}