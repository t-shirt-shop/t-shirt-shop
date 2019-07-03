import React from 'react';
import styled from 'styled-components';
import {getOrders} from '../../store/actions/ordersActions';
import { connect } from "react-redux";
import img from "../../assets/ORDER_PLACED.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
    background-image: linear-gradient(to right, #2FC145, #B4FF4E); 
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
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
    margin: 15px 0;
`
const StyledButtonTwo = styled.button`
    background-image: linear-gradient(to right, #2FC145, #B4FF4E); 
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
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
    background: #FF6969;
    width: 330px;
    border-radius: 30px;
    font-family: arial;
    font-weight: bold;
    margin: 15px 0;
`
const Span = styled.span`
    float: right;
`
const Div = styled.div`
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

class OrderPlaced extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getOrders()
  }

  render () {

    console.log("Props:", this.props.orders)
    console.log("State:", this.state)
  
  return ( 
    <Div>
      <img src={img} alt="svgimage"/>
      <H2>ORDER PLACED</H2>
      <P>WHILE WE PREPARE YOUR ORDER REVIEW <br/> THE SHIPPING ADDRESS AND ORDER DETAILS.</P>

      <form>
        Default Shipping Address:
      <input
        type="text" 
        placeholder="address"
        style={{
          width: "330px",
          borderBottom: "1px solid black"
        }}
      />
      </form>

      <p>To Add: Map over Item Cart Information here.</p>

      <div>
        <StyledButton>CHANGE THE ADDRESS
          <Span><FontAwesomeIcon icon={faChevronCircleRight} size="lg"/></Span> 
        </StyledButton> 

        <StyledButtonTwo>CANCEL ORDER
          <Span><FontAwesomeIcon icon={faTimesCircle} size="lg"/></Span> 
        </StyledButtonTwo> 
      </div>
    </Div> 
  );
}
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps, {getOrders})(OrderPlaced);