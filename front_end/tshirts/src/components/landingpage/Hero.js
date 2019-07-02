import React from 'react';

import img from "../../assets/LimitedEdition.png";
import img2 from "../../assets/Weekly Sale.png";

import styled from "styled-components";

const Img = styled.img`
    border-radius: 20px;
    margin-top: 35px;
`
const ButtonGroup = styled.div`
    
`

const StyledButton = styled.span`
    background-image: linear-gradient(#505862, #9D9E9F);
    padding: 10px 20px; 
    cursor: pointer; 
    color: white;
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