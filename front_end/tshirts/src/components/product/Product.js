import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Color from "./components/Options/Color";
import Size from "./components/Options/Size";
import AddToCartButton from "./components/AddToCartButton";
import Quantity from "./components/Quantity";
import LikeIcon from "./components/LikeIcon";



const Container = styled.div`
background-color: rgba(242, 248, 248, 1);
height: 100vh;
`

const StickToBottom = styled.div`
position: absolute;
bottom: 2%;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
`

const ColorText = styled.p`
  margin-top: 65%;
  display: flex;
  margin-left: 20px;
`;

const SizeText = styled.p`
  display: flex;
  margin-left: 20px;
`;

const Product = () => {
  return (
    
    <Container>
        <Nav />
        
      <div>
        <Hero />
      </div>
      <div />
      <ColorText>
        <p>Color</p>
      </ColorText>
      <div className="colors">
        <Color />
      </div>

      <SizeText><p>Size</p></SizeText>
      <div className="sizes">
        <Size />
      </div>
        <Quantity />
        <StickToBottom>
      <AddToCartButton />
      <LikeIcon />
        </StickToBottom>
    </Container>
    
  );
};

export default Product;
