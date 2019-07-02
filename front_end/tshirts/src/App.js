import React from 'react';
import Landing from "./components/landingpage/Landing";
import Shirts from "./components/shirts/Shirts";
import Product from "./components/product/Product";
import './App.css';
import { Route } from "react-router-dom";
import Login from './components/registerLogin/Login';
import Register from './components/registerLogin/Register';
import Orders from './components/orders/Orders';

function App() {
  return (
    <div className="App">
    	<Route exact path="/" component={Landing} />
    	<Route path="/shirts" component={Shirts} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    	<Route path="/product" component={Product} /> 
      <Route path="/orders" component={Orders} />
      {/* ^^ Will change to the exact shirt name or products/shirt_name after skeleton is built  */}
    </div>
  );
}

export default App;
