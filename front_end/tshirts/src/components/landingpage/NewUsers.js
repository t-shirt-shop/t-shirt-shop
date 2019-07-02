import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SignUpDiv = styled.span`
    background: #40C947;
`

class NewUsers extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>FOR NEW USERS ONLY</h1>
                <p>ENJOY AND ADDITIONAL 10% OFF YOUR ORDER</p>
                <p>WHEN YOU REGISTER TODAY</p>

                <form>
                    <input 
                        type="text"
                        placeholder="Theodor Seuss Geisel"
                        />
                          <input 
                        type="text"
                        placeholder="TheoderSeuss@gmail.com"
                        />
                          <input 
                          placeholder="1Fish2Fish"
                        type="text"
                        
                        />
                </form>
                <SignUpDiv>SIGN UP <span><FontAwesomeIcon icon={faArrowRight} /></span> </SignUpDiv>
            </div>
        );
    }
}

export default NewUsers;