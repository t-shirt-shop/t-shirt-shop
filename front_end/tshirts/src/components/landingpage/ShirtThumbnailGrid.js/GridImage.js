import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`
    position: relative;
    height: 180px;
    width: 160px;
    /* margin-bottom: 15px; */
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

`
const H5 = styled.h5`
    color: white;
    padding-left: 15px;
`

const H3 = styled.h3`
    color: white;
    padding-right: 15px;
`

const GridImage = (props) => {

    return (
        <ParentDiv>
          <Img src={require("./GasMask-Black-Male.png")} alt="gas-mask" />
          {/* <div className='black-bar'>
            <h5 className='shirt-name'>Fish Mask</h5>
            <p className='shirt-price'>$50</p>
          </div> */}
          <Div>
            <H5>Fish Mask</H5>
            <H3>$50</H3>
          </Div>
        </ParentDiv>
    )
}

export default GridImage;