import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const StickToBottom = styled.div`
  position: absolute;
  bottom: 2%;
  margin-left: 20px;
`;

const StyledButton = styled.button`
  position: sticky;
  background-image: linear-gradient(to right, #2fc145, #b4ff4e);
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
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 330px;
  border-radius: 30px;
  font-family: arial;
  font-weight: bold;
  width: 250px;
`;
const Span = styled.span`
  float: right;
`;
const P = styled.p`
  padding-bottom: 15px;
  margin: 0 auto;
  font-family: arial;
  font-style: italic;
  font-size: 2vh;
  font-weight: bold;
  line-height: 4vh;
  align-content: center;
`;

const AddToCartButton = props => {
  return (
    <>
      <StyledButton>
        ADD TO CART
        <Span>
          <FontAwesomeIcon icon={faChevronCircleRight} size="lg" />
        </Span>
      </StyledButton>
    </>
  );
};

export default AddToCartButton;
