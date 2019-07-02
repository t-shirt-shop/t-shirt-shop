import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Button = styled.button`
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
`
const ContainerDiv = styled.div`
    background: #F2F8F8;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
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
    font-weight: bold;
    line-height: 3.5vh;

    
`

class NewUsers extends React.Component {
    constructor(){
        super();
    
    }

    render(){
        return(
            <ContainerDiv>
                <H2>FOR NEW USERS ONLY</H2>
                <P>ENJOY AND ADDITIONAL 10% OFF YOUR ORDER <br/> WHEN YOU REGISTER TODAY</P>

                <form>
                    <Input 
                        type="text"
                        placeholder="Theodor Seuss Geisel"
                        />
                          <Input 
                        type="text"
                        placeholder="TheoderSeuss@gmail.com"
                        />
                          <Input 
                          placeholder="1Fish2Fish"
                        type="text"
                        
                        />
                </form>
                <Button>SIGN UP <span><FontAwesomeIcon icon={faArrowRight} /></span> </Button>
            </ContainerDiv>
        );
    }
}

export default NewUsers;