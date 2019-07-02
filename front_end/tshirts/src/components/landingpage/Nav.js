import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// const Div = styled.div`
//     display: flex;
// ` 

function Nav() {
    return (
        <div className='navi'>
            <NavLink to="/">
                <div className='logos'>
                    <p className='logo'>Logo</p>
                </div>
            </NavLink>
            <div className='icons'>
                <div className='icon'> 
                    <NavLink exact to="/login">
                        <FontAwesomeIcon icon={faUser} /> 
                    </NavLink>
                </div><div className='icon'> <FontAwesomeIcon icon={faShoppingCart} /> </div>   
            </div>
        </div>
    );
}

export default Nav; 