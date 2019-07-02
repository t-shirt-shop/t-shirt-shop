import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    padding-top: 15px; 
    color: white;
    margin: 0 auto;
    font-weight: 700;
    font-size: 4.7vh;
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
    background-image: linear-gradient(to right, #77A5F8, #D5A3FF);
`
const RecentlyAdded = (props) => {

    return (
        <Div>
            <H1>Recently Added</H1>
            <P>MOST RECENTLY ADDED DESIGNS</P>
        </Div>
    )
}

export default RecentlyAdded;