import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #F2F8F8;
  font-family: arial;
  font-style: italic;
  padding: 40px 15px;
  font-weight: bold;
`

const Footer = () => {
  return(
    <Div>
      <small>© 2019 T-Shirt Shop. All Rights Reserved</small>
    </Div>
  );
}

export default Footer;