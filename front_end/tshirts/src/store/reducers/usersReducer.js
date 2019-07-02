//import actions
import { 
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS
} from '../../store/actions/usersActions';



//set initial state

const initialState = {
  isRegistering: false,
  isRegistered: false,
  registrationError: '',
  loggingIn: false,
  loggedIn: false,
  loginError: '',
  user: {}
}

const usersReducer = (state = initialState, action) => {
      switch(action.type){
          case REGISTER_START:
              return {
                  ...state,
                  isRegistering: true,
                  registationError: ''
              }
          case REGISTER_SUCCESS: 
              return {
                  ...state,
                  isRegistering: false,
                  isRegistered: true,
                  registationError: '',
                  user: action.payload
              }
          case REGISTER_FAILURE:
              return {
                  ...state,
                  registationError: action.payload
              }

          case LOGIN_START:
              return {
                  ...state,
                  loggingIn: true,
                  loginError: ''
              }
          case LOGIN_SUCCESS:
              return {
                  ...state,
                  loggingIn: false,
                  loggedIn: true,
                  loginError: '',
                  user: action.payload
              }
<<<<<<< HEAD
          default:
            return state
=======
            default:
                return state;
>>>>>>> 09a8454fb63025d60b07a774847deb5407657be4
      }
}

export default usersReducer;