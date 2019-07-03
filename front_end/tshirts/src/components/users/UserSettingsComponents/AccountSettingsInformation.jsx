import React, { Component } from 'react';

class AccountSettingsInformation extends Component {
	state = {  }
	render() { 
		return (
			<div className="AccountSettingsInformation">
			<div className="content_header"> Account Settings </div>
			<div className="shipping_form">
				<div className="input">
					<p>Account Holders Name</p>
					<input type="text" placeholder="Theodor Seuss Geisel" />
				</div>
				<div className="input">
					<p>Account Email</p>
					<input type="email" placeholder="Theodor Seuss Geisel" />
				</div>
				<div className="password">
					<p> Password </p>
					<input type="password" placeholder="1fish2Fish"/>
				</div>
				<div className="password">
					<p> Confirm Password </p>
					<input type="password" placeholder="1fish2Fish"/>
				</div>
			</div>
		</div>
		);
	}
}
 
export default AccountSettingsInformation;
