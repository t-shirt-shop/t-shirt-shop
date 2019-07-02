import React from 'react';

import img from "../../assets/LimitedEdition.png";
import img2 from "../../assets/Weekly Sale.png";

import styled from "styled-components";

const Img = styled.img`
    border-radius: 20px;
    margin-top: 7.5px;
`
const ButtonGroup = styled.div`

`

function Hero(){
    return(
        <div>
            <div><img src={img} /> </div>
            <ButtonGroup>
                <button>Shop All</button>
                <button>Hot</button>
                <button>Artistic</button>
                <button>Sale</button>
            </ButtonGroup>
            <div><Img src={img2} /> </div>
        </div>
    );
}

export default Hero;