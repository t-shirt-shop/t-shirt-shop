import React from "react";
import { connect } from "react-redux";
import { getUsersCartItems } from "../../store/actions/cartsActions";
import Nav from "../landingpage/Nav";
import PriceBubble from "./PriceBubble";
import img3 from "../../assets/ShirtGrid.png";
import svg from "../../assets/SHOPPING_CART.svg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Button = styled.button`
    background-image: linear-gradient(to right, #2FC145, #B4FF4E); 
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 300px 0;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #40C947;
    width: 330px;
    border-radius: 30px;
    font-family: arial;
    font-weight: bold;
`
const ContainerDiv = styled.div`
    background: #F2F8F8;
    margin: 25px 0;
    min-height: 605px;
    margin: 0;
    height: 160px;
`

const CartItem = styled.div`
	border-bottom: 1px solid #bec5c5;
margin-top: 30px;
position: absolute;
width: 100%;
display: flex;
justify-content: space-between;
background-color: white;
max-height: 160px;

box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.20);

span {
  color: red;
  font-weight: bolder;
  margin-right: 15px;
  margin-top: 5px;
}
`
const Description = styled.div`
width: 50%;
text-align: start;
p{
  margin-top: -20px;
  margin-bottom:21px;
  :first-of-type{
    font-weight: bolder;
    margin-top: 10px;
    margin-bottom: 25px;
  }
}

`

const H2 = styled.h2`
    padding-top: 40px; 
    margin: 0 auto;
    font-family: arial;
    font-weight: 700;
    font-size: 4.7vh;
`
const P = styled.p`
    padding-bottom: 15px; 
    margin: 0 auto;
    font-family: arial;
    font-style: italic;
    font-size: 2vh;
    font-weight: 400;
    line-height: 4vh;
    align-content: center;
`
const Span = styled.span`
    float: right;
`
const Img = styled.img`
  height: 160px;
  display: flex;
`

const SVG = styled.img`
  margin-top: 40px;

`
class Carts extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem('id')
    this.props.getUsersCartItems('1');
  }
  render(){
  	console.log(this.props)
    return(
      <div>
        <Nav />
        <ContainerDiv>

          <SVG src={svg} />
          <H2>YOUR CART</H2>
          <P>SUBTOTAL: $100</P>
          <P>SHIPPING IS INCLUDED IN THE PRICE ABOVE</P>
          <CartItem>

          <Img src={img3} />
          <PriceBubble />
          <Description>
          
            <p>Fish Mask</p>
            <p>Style: Men's Organic Cotton</p>
            <p>Color: Black</p>
            <p>Size: Medium</p>
            <p>Quantity: 2</p>
            <p>Individual Price: $50</p>
          </Description>
          <span>X</span>
          </CartItem>
          <Link to="/orders">
            <Button 
              onClick={this.handleSubmit}>PLACE ORDER
              <Span>
                <FontAwesomeIcon icon={faChevronCircleRight} size="xl"/>
              </Span> 
            </Button>
          </Link>
        </ContainerDiv>
      </div>)
  }
}

const mapStateToProps = state => ({
  carts: state.cart.cartItems,
  user: state.user
})

export default connect(mapStateToProps, { getUsersCartItems})(Carts);