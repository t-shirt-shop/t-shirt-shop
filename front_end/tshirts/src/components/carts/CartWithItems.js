import React from "react";
import { connect } from "react-redux";
import { getUsersCartItems } from "../../store/actions/cartsActions";
import Nav from "../landingpage/Nav";

import svg from "../../assets/SHOPPING_CART.svg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

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
          <Img src={svg} />
          <H2>YOUR CART</H2>
          <P>YOUR CART LOOKS EMPTY <br/> TRY ADDING SOME ITEMS TO IT...</P>
          <Button 
            onClick={this.handleSubmit}>SIGN IN 
            <Span>
              <FontAwesomeIcon icon={faChevronCircleRight} size="xl"/>
            </Span> 
          </Button>
        </ContainerDiv>
      </div>)
  }
}

const mapStateToProps = state => ({
  carts: state.cart.cartItems,
  user: state.user
})

export default connect(mapStateToProps, { getUsersCartItems})(Carts);