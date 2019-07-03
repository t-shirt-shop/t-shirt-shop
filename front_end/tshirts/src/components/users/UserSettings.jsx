import React from 'react';
import { connect } from "react-redux";
import Nav from '../landingpage/Nav';
import ShippingInformation from './UserSettingsComponents/ShippingInformation';
import BillingInformation from './UserSettingsComponents/BillingInformation'
import AccountSettingsInformation from './UserSettingsComponents/AccountSettingsInformation';

class UserSettings extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			accountSettings:{
				user_name:"Theodor Seuss Geisel the second",

			}
		};
	}

	componentDidMount(){
		console.log('UserSettings Mounted');
		console.log(this.store)
	}

	render() {
		return (
			<div>
				<Nav />
				<div>
					<p>User Settings Lives Here</p>
					<ShippingInformation />
					<BillingInformation />
					<AccountSettingsInformation />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}


export default connect(null, {})(UserSettings);
