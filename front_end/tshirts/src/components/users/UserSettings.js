import React from 'react';
import { connect } from "react-redux";
import Nav from '../landingpage/Nav';

class UserSettings extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		console.log('UserSettings Mounted')
	}

	render() {
		return (
			<div>
				<Nav />
				<div>
					<p>User Settings Lives Here</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}


export default UserSettings; //connect(mapStateToProps, {})();
