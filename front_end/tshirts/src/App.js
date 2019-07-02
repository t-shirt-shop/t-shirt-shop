import React from 'react';
import Landing from "./components/landingpage/Landing";
import Shirts from "./components/shirts/Shirts";
import Product from "./components/product/Product";
import './App.css';
import { Route } from "react-router-dom";
import Login from './components/registerLogin/Login';
import Register from './components/registerLogin/Register';

function App() {
  return (
    <div className="App">
    	<Route exact path="/" component={Landing} />
    	<Route path="/shirts" component={Shirts} />
<<<<<<< HEAD
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
=======
    	<Route path="/product" component={Product} /> 
      {/* ^^ Will change to the exact shirt name or products/shirt_name after skeleton is built  */}
>>>>>>> 5ef06336c7f199743cab5612f5d5507a79ff630c
    </div>
  );
}

export default App;
