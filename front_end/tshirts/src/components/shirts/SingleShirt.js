import React from 'react';
import axios from 'axios';
import {getSingleShirt} from '../../store/actions/shirtsActions.js';
import { connect } from "react-redux";

class SingleShirt extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		};
	}

	componentDidMount(){
		var url = window.location.href;
		var id = url.substr(url.lastIndexOf('/') + 1);
		this.props.getSingleShirt(id)
	}

	render() {
		console.log(this.props.shirt)
		return (
			<div>hello world</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		shirt: state.shirts.singleShirt
	}
}

export default connect(mapStateToProps, {getSingleShirt})(SingleShirt);
