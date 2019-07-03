



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Container = styled.div`
	margin: 0;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 10px;
	height: 40px;
	display:flex;
	justify-content: space-between;
	align-items: flex-start;
	font-size: 20px;
	background-color: white;
`;

const Logo = styled.div`

	margin-left: 20px;


`;
const Title = styled.div`
font-weight: bold;

`
const Icons = styled.div`
display: flex;
margin-top: 6px;
padding-right: 30px;
margin-right: 20px;

.test {
	margin-left: 10px;
}

`;

function Nav() {
  return (
    <Container>
      <Logo>
        Logo
      </Logo>
			
      <Title> 
			{/* p-tags&htags too much styling applied */}
			Gas Mask
			</Title>
		<Icons>
	
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon className="test" icon={faShoppingCart} />
		</Icons>

    </Container>
  );
}

export default Nav;
