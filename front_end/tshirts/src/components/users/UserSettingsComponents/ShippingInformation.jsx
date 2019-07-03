import React, { Component } from 'react';
import StatesList from './StatesList';

class ShippingInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() { 
		return (
			<div className="ShippingInformation">
				<div className="content_header"> ShippingInformation </div>
				<div className="shipping_form">
					<div className="input">
						<p>Full Name</p>
						<input type="text" placeholder="Theodor Seuss Geisel" />
					</div>
					<div className="input">
						<p>Default Shipping Address</p>
						<input type="address" placeholder="1337 N Bluefish Lane, 13245" />
					</div>
					<div className="double">
						<div className="input">
							<p>Apt #</p>
							<input type="apt" placeholder="1F" />
						</div>
						<div className="input">
							<p>State</p>
							<StatesList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default ShippingInformation;
