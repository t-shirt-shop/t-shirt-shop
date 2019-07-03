import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 40px;
margin-top: 15px;

`
const SubtractButton = styled.div`
width: 26px;
height: 26px;
margin: 10px;
background-color: rgba(114, 124, 142, .20);
border-radius: 100%;
font-weight: bolder;
`
const AddButton = styled.div`
width: 26px;
height: 26px;
margin: 10px;
background-color: rgba(114, 124, 142, .20);
border-radius: 100%;
font-weight: bolder;

`

let count = 0;

const countUp = (count) => {return count++};  
const countDown = (count) => {return count--}; 
const Quantity = () => {
	return ( <Container>
		<p>
			Quantity
		</p>
		<SubtractButton onClick={countDown(count)}>-</SubtractButton>
		{count}
		<AddButton onClick={()=>countUp(count)}>+</AddButton>
	</Container> );
}
 
export default Quantity;