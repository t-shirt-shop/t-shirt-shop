import React from 'react';
import styled from 'styled-components';

import img from '../../../assets/heart-icon.svg'



const Bubble = styled.div`
width: 46px;
height: 46px;
border-radius: 360px;
background-color: #F2F8F8;
border: 1px solid #BEC5C5;
box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.20);
display: flex;
align-items: center;
justify-content: center;
p {
	color: white;
	text-align: center;
	
	
}
`
const LikeIcon = () => {
	return ( 
		<Bubble>
	<img src={img}></img>
		</Bubble>
	 );
}
 
export default LikeIcon;