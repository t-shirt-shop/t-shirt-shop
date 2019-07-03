import React from "react";
import { connect } from "react-redux";
import { getUsersCartItems } from "../../store/actions/cartsActions";

class Carts extends React.Component {
  componentDidMount() {
    this.props.getUsersCartItems();
  }
  render(){
    return(<div>
      <h1>cart component</h1>
    </div>)
  }
}

const mapStateToProps = state => ({
  carts: state.cart
})

export default connect(mapStateToProps, { getUsersCartItems})(Carts);