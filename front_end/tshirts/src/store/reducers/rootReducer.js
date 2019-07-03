import { combineReducers } from "redux";
import cartsReducer from "./cartsReducer";
import ordersReducer from './ordersReducer';
import commentsReducer from './commentsReducer'
import shirtsReducer from './shirtsReducer';
import usersReducer from './usersReducer';

const rootReducer = (combineReducers)({
  cart: cartsReducer,
  comments: shirtsReducer,
  orders: ordersReducer,
  shirts: shirtsReducer,
  users: usersReducer
});

export default rootReducer;