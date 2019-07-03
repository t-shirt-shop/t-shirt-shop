import React from 'react';
import {getSingleShirt} from '../../store/actions/shirtsActions.js'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const DisplayCatagories = ({catagories, shirtsByCategory}) => {
	return (
		<div>
			{catagories.map((category, i) => {
			return (
				<div key={i} onClick={()=> {shirtsByCategory(category.id)}}>
					{category.category_name}
				</div>
				)
			})}
		</div>
	)
}

const DisplayShirts = ({shirts, history}) => {
	 return (
	 		<div>
	 			{shirts.map((shirt, i) => {
	 				return (
	 					<div key={i}>
	 						<img src={shirt.image_url}></img>
	 						<div>{shirt.shirt_name}</div>
	 						<div>{shirt.description}</div>
	 						<div 
	 							onClick={() => {history.push(`/shirts/${shirt.id}`)}}>
	 							view more
	 						</div>
	 					</div>
	 				)
	 			})}
	 		</div>
	 	)
}

class Shirts extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.getAllCatagories()
	}

	render() {

		const {catagories, shirts} = this.props.shirts
		const {shirtsByCategory, history} = this.props

		console.log(this.props)

		return (
			<div>
				<div><Link to='/'>to landing</Link></div>

				<DisplayCatagories 
					catagories={catagories} 
					shirtsByCategory={shirtsByCategory}
				/>

				<DisplayShirts
					shirts={shirts}
					history={history}
				/>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		shirts: state.shirts.getSingleShirt
	}
}

export default connect(mapStateToProps, {getSingleShirt})(Shirts);
