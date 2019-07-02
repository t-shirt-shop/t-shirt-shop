import React from "react";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fontawesome/free-solid-svg-icons";
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 9.8px 20px;
`
const SubContainDiv = styled.div`
    display: flex:
    flex-direction: row;
`

function Nav() {
    return (
        <ContainerDiv>
            <p>Logo</p>
            <SubContainDiv> 
                <FontAwesomeIcon icon={faShoppingCart} />
                <FontAwesomeIcon icon={faUser} /> 
            </SubContainDiv>  

        </ContainerDiv>
    );
}

export default Nav; 
