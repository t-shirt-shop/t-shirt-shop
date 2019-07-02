import React from 'react';
import {shirtsByCategory} from '../../store/actions/shirtsActions.js'
import { connect } from "react-redux";

class Shirts extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.shirtsByCategory(1)
	}

	render() {
		return (
			<div>hello world</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.shirts.loading,
		error: state.shirts.error,
		shirts: state.shirts.shirts
	}
}

export default connect(mapStateToProps, {shirtsByCategory})(Shirts);
