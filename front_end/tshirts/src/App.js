import React from 'react';
import Landing from "./components/landingpage/Landing";
import Shirts from "./components/shirts/Shirts";
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    	<Route exact path="/" component={Landing} />
    	<Route path="/shirts" component={Shirts} />
    </div>
  );
}

export default App;
