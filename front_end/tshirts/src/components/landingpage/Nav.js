import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const Div = styled.div`
//     display: flex;
// ` 

function Nav() {
    return (
        <div>
            <p>Logo</p>
            <div> <FontAwesomeIcon icon={faShoppingCart} /> </div>  
            <div> <FontAwesomeIcon icon={faUser} /> </div>  

        </div>
    );
}

export default Nav; 
