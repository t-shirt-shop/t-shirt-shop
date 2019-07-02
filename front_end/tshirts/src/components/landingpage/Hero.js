import React from 'react';

import img from "../../assets/LimitedEdition.png";
import img2 from "../../assets/Weekly Sale.png";

import styled from "styled-components";

const Img = styled.img`
    border-radius: 20px;
    margin-top: 35px;
`
const ButtonGroup = styled.div`
    button:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    button:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    position: relative;
    top: -25px;
    
`

const StyledButton = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: arial;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(180deg, #505862, #9D9E9F);

    padding: 10px 20px; 
    cursor: pointer; 
`

function Hero(){
    return(
        <div>
            <div><img src={img} /> </div>
            <ButtonGroup>
                <StyledButton>Shop All</StyledButton>
                <StyledButton>Hot</StyledButton>
                <StyledButton>Artistic</StyledButton>
                <StyledButton>Sale</StyledButton>
            </ButtonGroup>
            <div><Img src={img2} /> </div>
        </div>
    );
}

export default Hero;