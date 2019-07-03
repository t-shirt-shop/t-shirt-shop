import React from 'react';
import styled from 'styled-components';
import PriceBubble from './PriceBubble'
import img from '../../../assets/ProductBanner.png';

const Div = styled.div`

position: absolute;
left:0;
width: 100%;
img {
	height: auto;
width: 100%;
}
`
const Hero = () => {
	return ( 
		<Div>

		<img src={img}></img>
		<PriceBubble/>
		</Div>
	 );
}
 
export default Hero;