import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
background-image: linear-gradient(to right, #FF7676, #FFAE4E); 
display: inline-block;
border: none;
padding: 1rem 2rem;
margin: 15px 0;
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
width: 330px;
border-radius: 30px;
font-family: arial;
font-weight: bold;
`
const Span = styled.span`
    float: right;
`
const P = styled.p`
  padding-bottom: 15px; 
  margin: 0 auto;
  font-family: arial;
  font-style: italic;
  font-size: 2vh;
  font-weight: bold;
  line-height: 4vh;
  align-content: center;
`



const HotFourButton = (props) => {
  return (
      <div>
          <StyledButton>SHOP HOT FOUR
            <Span><FontAwesomeIcon icon={faChevronCircleRight} size="lg"/></Span> 
        </StyledButton> 
      </div>
  )
}

export default HotFourButton;