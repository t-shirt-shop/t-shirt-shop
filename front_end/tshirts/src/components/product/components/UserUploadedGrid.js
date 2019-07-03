import React, { Component } from 'react';
import styled from 'styled-components';
import img3 from "../../../assets/ShirtGrid.png";

const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
// `
// const applyBorder = () => {
// 	if 
// }
const ParentDiv = styled.div`
    position: relative;
    height: 180px;
		width: 160px;
		
    margin: auto;
		margin-bottom: 15px;

		
		
`
const Img = styled.img`
    margin-top: 15px;
    /* border: 1px solid red; */
    height: 180px;
    width: 160px;
    border-radius: 15px;
`
const Div = styled.div`
    background-color: black;
    opacity: 0.6;
    position: absolute;
    /* transform: translate(-70%, -70%); */
    bottom: -10%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		font-size:.6rem;
		padding-top:10px;
		


`
const H5 = styled.h5`
    color: white;
    padding-left: 15px;
`
const H3 = styled.h3`
    color: white;
    padding-right: 15px;
`
class UserUploadGrid extends Component {

    state = {
      images: [
        { id: 1 },
        { id: 2 },
				{ id: 3 }],

		}
		

		

  render() {

    const { images } = this.state;

    return (
      <DivContainer>
      {images.map((image, id) => (
        <ParentDiv key={id}>
          <Img src={img3} alt="gas-mask" />
        </ParentDiv>
      ))}
			<ParentDiv key="4">
          <Img src={img3} alt="gas-mask" />
          <Div>
            <H5>4/7 Pictures</H5>
            <H3>Open Gallery</H3>
          </Div>
        </ParentDiv>
      </DivContainer>
    )
  }
}

export default UserUploadGrid;