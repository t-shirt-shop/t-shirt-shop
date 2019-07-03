import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  height: 50px;
  width: 225px;
  border-bottom: 0.5px solid #bec5c5;
  display: flex;
  align-items: flex-end;

  p {
    margin-bottom: 2px;
    margin-left: 1px;
  }
  span {
		color:black;
		margin-left: 45px;

  }
`;
const Style = () => {
  return (
    <StyledButton>
      <p>Mens - Organic Cotton</p>
      <span>
        <FontAwesomeIcon icon={faCaretUp} size="lg" />
      </span>
    </StyledButton>
  );
};

export default Style;
