import React from "react";
import { connect } from "react-redux";
import { registerNewUser } from '../../store/actions/usersActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import arrow from '../../assets/arrow-alt-circle-right.svg'
import styled from "styled-components";

const Button = styled.button`
    background-image: linear-gradient(to right, #2FC145, #B4FF4E); 
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #40C947;
    width: 330px;
    border-radius: 30px;
    font-family: arial;
    font-weight: bold;
`
const ContainerDiv = styled.div`
    background: #F2F8F8;
    margin: 25px 0;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #515C6F;

`;
const H2 = styled.h2`
    padding-top: 40px; 
    margin: 0 auto;
    font-family: arial;
    font-weight: 700;
    font-size: 4.7vh;
`
const P = styled.p`
    padding-bottom: 15px; 
    margin: 0 auto;
    font-family: arial;
    font-style: italic;
    font-size: 2vh;
    font-weight: bold;
    line-height: 4vh;
    align-content: center;
`
const Span = styled.span`
    float: right;
`

class NewUsers extends React.Component {
    constructor(){
        super();
        this.state = {
            registerUser: {
            name: "",
            email: "",
            password: ""
            }
        };
    }

    handleChange = e => {
        this.setState({ 
            registerUser: {
                ...this.state.registerUser,
                [e.target.name]: e.target.value
            }
        })
      };

    handleSubmit = e => {
        e.preventDefault();
        this.props.registerNewUser(this.state.registerUser)
        .then(() => {
            this.props.history.push("/shirts");
         });
        this.setState({ 
            registerUser: {
                name: '',
                email: '',
                password: ''
            }
        })
    };

    render(){
        return(
            <ContainerDiv>
                <H2>FOR NEW USERS ONLY</H2>
                <P>ENJOY AND ADDITIONAL 10% OFF YOUR ORDER <br/> WHEN YOU REGISTER TODAY</P>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                        type="text"
                        placeholder="Theodor Seuss Geisel"
                        value={this.state.name} 
                        onChange={this.handleChange}
                        name='name'
                    />
                    <Input 
                        type="text"
                        placeholder="TheoderSeuss@gmail.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                    />
                    <Input 
                        placeholder="1Fish2Fish"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                    />
                </form>
                <Button>SIGN UP <Span>
                {/* <img src={arrow} */}
                    <FontAwesomeIcon icon={faChevronCircleRight} size="xl"/>
                    </Span> </Button>
            </ContainerDiv>
        );
    }
}

export default connect(null, { registerNewUser })(NewUsers);