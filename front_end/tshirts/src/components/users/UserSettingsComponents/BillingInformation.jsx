import React, { Component } from 'react';
import StatesList from "./StatesList"

class BillingInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() { 
		return (
			<div className="BillingInformation">
				<div className="content_header"> Billing Information </div>
				<div className="billing_form">
					<div className="input">
						<p>Card Holders Name</p>
						<input type="text" placeholder="Theodor Seuss Geisel" />
					</div>
					<div className="input">
						<p>Default Billing Information</p>
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
 
export default BillingInformation;
