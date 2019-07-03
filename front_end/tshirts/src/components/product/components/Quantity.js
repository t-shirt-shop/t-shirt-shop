import React,{Component} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 43px;
  margin-top: 30px;
`;
const SubtractButton = styled.div`
  width: 26px;
  height: 26px;
  margin: 10px;
  background-color: rgba(114, 124, 142, 0.2);
  border-radius: 100%;
  font-weight: bolder;
`;
const AddButton = styled.div`
  width: 26px;
  height: 26px;
  margin: 10px;
  background-color: rgba(114, 124, 142, 0.2);
  border-radius: 100%;
  font-weight: bolder;
`;

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  countUp = count => {
    this.setState({count: count+=1});
  };
	countDown = count => 
	{
		if(this.state.count != 0) {

			this.setState({count: count-=1});
		}
  };

  render() {
    return (
      <Container>
        <p>Quantity</p>
        <SubtractButton onClick={()=>this.countDown(this.state.count)}>
          -
        </SubtractButton>
        {this.state.count}
        <AddButton onClick={()=>this.countUp(this.state.count)}>+</AddButton>
      </Container>
    );
  }
}
export default Quantity;
