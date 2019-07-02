import { combineReducers } from "redux";
// import cartsReducer from "./cartsReducer";
// import ordersReducer from './ordersReducer';
import shirtsReducer from './shirtsReducer';
// import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  // cart: cartsReducer,
  // orders: ordersReducer,
  shirts: shirtsReducer,
  // users: usersReducer
});

export default rootReducer;