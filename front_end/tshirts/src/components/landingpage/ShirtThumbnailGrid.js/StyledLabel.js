import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    padding-top: 15px; 
    color: white;
    margin: 0 auto;
    font-family: arial;
    font-weight: 700;
    font-size: 4.7vh

`
const P = styled.p`
    padding-bottom: 15px; 
    color: white;
    margin: 0 auto;
    font-family: arial;
    font-style: italic;
    font-size: 2vh;
    font-weight: bold;
    line-height: 3.5vh;
`
const Div = styled.div`
    background-image: linear-gradient(to right, #9F6EA3, #FF74A4);
    margin-top: 15px;
`
const StyledLabel = (props) => {

    return (
        <Div>
            <H2>24 Hour Sale</H2>
            <P>15% OFF SELECT ITEMS</P>
        </Div>
    )
}

export default StyledLabel;