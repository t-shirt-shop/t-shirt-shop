import React from 'react';
import Nav from '../landingpage/Nav';
import { Route } from "react-router-dom";
import OrderPlaced from "./OrderPlaced";
import OrderCancelled from './OrderCancelled';
import OrderTracking from './OrderTracking';

const Orders = (	) => {
	return ( 
    <>
      <Nav />
      {/* IMPORTANT COMMENT BELOW!!! */}
      {/* Add more to each path like /order#### or id. Also, fix route in App.js to */}
      <Route exact path="/orders" component={OrderPlaced} />
      <Route path="/orders/tracking" component={OrderTracking} />
      <Route path="/orders/cancelled" component={OrderCancelled} />
    </> 
  );
}

export default Orders;