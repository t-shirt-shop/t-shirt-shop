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
    font-weight: bold;
    line-height: 3.2vh;
    font-size: 2vh;
`
const Div = styled.div`
    background-image: linear-gradient(to right, #FF7676, #FFAE4E);
    margin-top: 10%;
`
const HotFour = (props) => {

    return (
        <Div>
            <H2>Hot Four</H2>
            <P>POPULAR ITEMS THIS WEEK</P>
        </Div>
    )
}

export default HotFour;