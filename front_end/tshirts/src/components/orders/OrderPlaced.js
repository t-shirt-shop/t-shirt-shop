import React from 'react';
import styled from 'styled-components';
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
`
const OrderPlaced = (	) => {
	return ( 
    <Div>
      <img src={img} alt="svgimage"/>
      <h1>ORDER PLACED</h1>
      <p>WHILE WE PREPARE YOUR ORDER PLEASE REVIEW THE SHIPPING ADDRESS AND ORDER DETAILS.</p>

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

      <div style={{background: "#F2F8F8"}}>
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

export default OrderPlaced;