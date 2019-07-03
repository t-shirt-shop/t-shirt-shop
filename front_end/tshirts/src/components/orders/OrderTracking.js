import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import img from "../../assets/TRACK_ORDER.svg";

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

const StyledButton = styled.button`
    background-image: linear-gradient(to right, #77A5F8, #D5A3FF); 
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
const Span = styled.span`
    float: left;
`

class OrderTracking extends React.Component {

  render() {

    return ( 
      <Div>
        <img src={img} alt="svgimage"/>
        <H2>TRACK ORDER</H2>
        <P>YOUR ORDER IS ON ITS WAY! IT SHOULD ARRIVE<br/><strong>TO DO: PIPE IN DELIVERY DATE</strong></P>

        <p style={{}}>
          <strong>To do: Add order number</strong>
          <br/>
          <strong>To do: map over cart items</strong>
        </p>

        <StyledButton>BACK TO SHOPPING
        <Span><FontAwesomeIcon icon={faChevronCircleLeft} size="lg"/></Span> 
        </StyledButton> 
      </Div> 
    );

  }

}

export default OrderTracking;