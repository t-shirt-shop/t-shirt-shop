import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Color from "./components/Options/Color";
import Size from "./components/Options/Size";
import Style from "./components/Options/Style";
import AddToCartButton from "./components/AddToCartButton";
import Quantity from "./components/Quantity";
import LikeIcon from "./components/LikeIcon";
import UserUploadGrid from "./components/UserUploadedGrid";
import Footer from "../landingpage/Footer";
import Reviews from "./components/Reviews";



const Container = styled.div`
background-color: rgba(242, 248, 248, 1);
`

const StickToBottom = styled.div`
position: relative;


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

const UserFilesText = styled.p`
  display: flex;
  margin-left: 20px;
  margin-bottom: -5px;
`;

const ReviewText = styled.p`
  display: flex;
  margin-left: 20px;
  padding-bottom: 20px;
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
      <Style />
        <Quantity />
        <StickToBottom>
      <AddToCartButton />
      <LikeIcon />
        </StickToBottom>
        <UserFilesText>User Uploaded Photos</UserFilesText>
    <UserUploadGrid />
    <ReviewText>Top Reviews</ReviewText>
    <Reviews />
    
    <Footer />
    </Container>
    
  );
};

export default Product;
