import React from "react";
import { connect } from "react-redux";
import { getUsersCartItems } from "../../store/actions/cartsActions";

class Carts extends React.Component {
  componentDidMount() {
    //let id = localStorage.getItem('id')
    this.props.getUsersCartItems('1');
  }
  render(){
  	console.log(this.props)
    return(<div>
      <h1>cart component</h1>
    </div>)
  }
}

const mapStateToProps = state => ({
  carts: state.cart.cartItems,
  user: state.user
})

export default connect(mapStateToProps, { getUsersCartItems})(Carts);