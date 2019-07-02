import React from 'react';
import Landing from "./components/landingpage/Landing";
import Shirts from "./components/shirts/Shirts";
import Product from "./components/product/Product";
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    	<Route exact path="/" component={Landing} />
    	<Route path="/shirts" component={Shirts} />
    	<Route path="/product" component={Product} /> 
      {/* ^^ Will change to the exact shirt name or products/shirt_name after skeleton is built  */}
    </div>
  );
}

export default App;
