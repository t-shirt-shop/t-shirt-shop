import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SalesButton = styled.div`
  width: 92%;
  background-image: linear-gradient(to right, #9F6EA3, #FF74A4);
  margin: auto;
  margin-top: 15px;
  position: relative;
  height: 50px;
  border-radius: 50px;
`

const P = styled.p`
    /* padding-bottom: 20px;  */
    color: white;
    margin: 0 auto;
    font-family: arial;
    font-size: 2vh;
    font-weight: bold;
    /* line-height: 3.5vh; */
    position: absolute;
    position: relative;
    top: 40%;
    padding: 0 10px;
`

const ArrowContainer = styled.div`
    background-color: green;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    /* position: absolute;
    position: relative; */
    /* top: 50%; */
    transform: rotate(90deg);
    /* margin-left: 20px; */
`

const RoundedButton = (props) => {
  return (
      <div>
        <SalesButton>
          <P>
            SHOP SALES
          </P>
          <ArrowContainer>
            <FontAwesomeIcon icon={faChevronUp} style={{color: "white", textAlign: "center", border: "1px solid red"}}/> 
          </ArrowContainer>
        </SalesButton>
      </div>
  )
}

export default RoundedButton;