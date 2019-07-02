import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    padding-top: 15px; 
    color: white;
    margin: 0 auto;
`
const P = styled.p`
    padding-bottom: 15px; 
    color: white;
    margin: 0 auto;
`
const Div = styled.div`
    background-image: linear-gradient(to right, #FF7676, #FFAE4E);
    margin-top: 10%;
`
const HotFour = (props) => {

    return (
        <Div>
            <H1>Hot Four</H1>
            <P>POPULAR ITEMS THIS WEEK</P>
        </Div>
    )
}

export default HotFour;