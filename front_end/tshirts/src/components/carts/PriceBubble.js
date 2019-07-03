import React from 'react';
import styled from 'styled-components';



const Bubble = styled.div`
width: 46px;
height: 46px;
border-radius: 360px;
background-color: #40C947;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 71%;
bottom: 35%;
p {
	color: white;
	text-align: center;
	
	
}
`
const PriceBubble = () => {
	return ( 
		<Bubble>
	<p>$100</p>
		</Bubble>
	 );
}
 
export default PriceBubble;