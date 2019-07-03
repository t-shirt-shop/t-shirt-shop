import React from 'react';
import Landing from "./components/landingpage/Landing";
import Shirts from "./components/shirts/Shirts";
import SingleShirt from "./components/shirts/SingleShirt";
import Product from "./components/product/Product";
import './App.css';
import { Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from './components/registerLogin/Login';
import Register from './components/registerLogin/Register';
import Orders from './components/orders/Orders';
import UserSettings from './components/users/UserSettings.jsx';
import Carts from './components/carts/Carts';
import CartWithItems from './components/carts/CartWithItems';

function App() {
  return (
    <div className="App">
    	<Route exact path="/" component={Landing} />
    	<Route exact path="/shirts" component={Shirts} />
      <Route path='/shirts/:id' component={SingleShirt} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    	<Route path="/product" component={Product} /> 
      {/* I (Bryce) have more routes in Orders Component. Should all routes be in App.js (here)? */}
      <Route path="/orders" component={Orders} />
      <Route path="/usersettings" component={UserSettings} />
      <Route path="/cart" component={Carts} /> 
      <Route path="/cart-items" component={CartWithItems} /> 
      {/* ^^ Will change to the exact shirt name or products/shirt_name after skeleton is built  */}
    </div>
  );
}

export default App;
