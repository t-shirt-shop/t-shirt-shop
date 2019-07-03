import React from "react";
import { connect } from "react-redux";
import { registerNewUser } from '../../store/actions/usersActions';
import Nav from "../landingpage/Nav";
import svg from "../../assets/SIGN_UP.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
    min-height: 605px;
    margin: 0;
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
  width: 300px;
  margin: 30px;

`;
const H2 = styled.h2`
    padding-top: 10px; 
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
const Img = styled.img`
  margin-top: 40px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`


class NewUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            RegisterUserCreds: {
              "user_name": "",
              email: "",
              password: ""
            }
        };
    }

    handleChange = e => {
        this.setState({ 
            RegisterUserCreds: {
                ...this.state.LoginUserCreds,
                [e.target.name]: e.target.value
            }
        })
      };

    handleSubmit = e => {
        console.log(this.props)
        e.preventDefault();
        this.props.registerNewUser(this.state.LoginUserCreds)
        this.props.history.push("/shirts")
        this.setState({ 
            LoginUserCreds: {
              name: "",
              email: "",
              password: ""
            }
        })
    };

    render(){
        return(
          <div>
            <Nav />
            <ContainerDiv>
                <Img src={svg} />
                <H2>SIGN UP</H2>
                <P>WHEN YOU SIGN UP YOU WILL GET 10% OFF YOUR FIRST ORDER!</P>

                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        type="text"
                        placeholder="Full Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name='name'
                    />
                    <Input 
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                    />
                    <Input 
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                    />
                    <Input 
                        placeholder="Confirm Password"
                        type="text"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        name='CoNfrimPassword'
                    />
                </Form>
                <Button 
                  onClick={this.handleSubmit}>SIGN UP 
                  <Span>
                    <FontAwesomeIcon icon={faChevronCircleRight} size="xl"/>
                  </Span> 
                </Button>
            </ContainerDiv>
          </div>
        );
    }
}

export default connect(null, { registerNewUser })(NewUsers);