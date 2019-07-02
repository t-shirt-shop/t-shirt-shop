import React from 'react';
import {shirtsByCategory} from '../../store/actions/shirtsActions.js'
import {registerNewUser, loginUser} from '../../store/actions/usersActions.js'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Shirts extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.shirtsByCategory(1)
		console.log(this.props)
	}

	render() {
		return (
			<div>
			<div>hello world</div>
			<div><Link to='/'> to landing</Link></div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.shirts.loading,
		error: state.shirts.error,
		shirts: state.shirts.shirts,
		users: state.users.user
	}
}

export default connect(mapStateToProps, {shirtsByCategory, registerNewUser, loginUser})(Shirts);
