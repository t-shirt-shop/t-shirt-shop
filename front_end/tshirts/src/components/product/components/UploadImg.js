import React, { Component } from "react";
import styled from "styled-components";
import img3 from "../../../assets/ShirtGrid.png";

const DivContainer = styled.div`
	display: flex;
  height: 85px;
	flex-wrap: nowrap;
	margin-left: 20px;
	margin-bottom: 30px;
	margin-top: -25px;
	border-bottom: 1px solid #bec5c5;
	
`;

const ParentDiv = styled.div`
  height: 50px;
  width: 60px;
	display:flex;
	flex-wrap:nowrap;
	



	
`;
const Img = styled.img`
  margin-top: 15px;
  /* border: 1px solid red; */
  height: 60px;
  width: 55px;
`;


class UploadImg extends Component {
  state = {
    images: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  render() {
    const { images } = this.state;

    return (
      <DivContainer>
        {images.map((image, id) => (
        <ParentDiv key={id}>
          <Img src={img3} alt="gas-mask" />
        </ParentDiv>
        ))}
      </DivContainer>
    );
  }
}

export default UploadImg;
