import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    padding-top: 15px; 
    color: white;
    margin: 0 auto;
    font-family: arial;
    font-weight: bold;
`
const P = styled.p`
    padding-bottom: 15px; 
    color: white;
    margin: 0 auto;
`
const Div = styled.div`
    background: #515C6F;
    margin-top: 10%;
`

const Button = styled.button`
    background-image: linear-gradient(to right, #2FC145, #B4FF4E); 
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    
    button:hover,
    button:focus {
        background: #0053ba;
    }
    
    button:focus {
        outline: 1px solid #fff;
        outline-offset: -4px;
    }
    
    button:active {
        transform: scale(0.99);
    } 
`
const DontForget = (props) => {

    return (
        <Div>
            <H2>DONT FORGET TO SIGN UP</H2>
            <Button>SIGN UP</Button>
            <P>IF YOU SIGN UP YOU GET AN</P>
            <P>ADDITIONAL 10% OFF</P>
        </Div>
    )
}

export default DontForget;