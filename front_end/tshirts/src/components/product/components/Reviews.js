import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import UploadImg from "./UploadImg";

const Container = styled.div`
`
const Nameplate = styled.div`
display:flex;
color: dodgerblue;
align-items:center;
margin-left: 20px;
margin-top: -30px;
margin-bottom:50px;


p {
	color: black;
	margin-left: 5px;
}
`

const ReviewText = styled.p`
margin-top: -65px;
margin-left: -15px;
font-size:1rem;
`
const Reviews = () => {
	return ( 
	
	<Container>
		<Nameplate>
		<FontAwesomeIcon icon={faUserCircle} size="lg" />
		<p>Austen Allred</p>
		</Nameplate>
		<ReviewText>This shirt was awesome! Quality was top notch.</ReviewText>
		<UploadImg />

		<Nameplate>
		<FontAwesomeIcon icon={faUserCircle} size="lg" />
		<p>Austen Allred</p>
		</Nameplate>
		<ReviewText>This shirt was awesome! Quality was top notch.</ReviewText>
		<UploadImg />

		<Nameplate>
		<FontAwesomeIcon icon={faUserCircle} size="lg" />
		<p>Austen Allred</p>
		</Nameplate>
		<ReviewText>This shirt was awesome! Quality was top notch.</ReviewText>
		<UploadImg />
		
	</Container> );
		
}
 
export default Reviews;