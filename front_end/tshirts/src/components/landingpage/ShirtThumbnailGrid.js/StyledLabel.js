// import React, { Component } from 'react';

// class StyledLabel extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>24 Hour Sale</h1>
//                 <p>15% OFF SELECT ITEMS</p>
//             </div>
//         )
//     }
// }

// export default StyledLabel;

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    padding-top: 15px; 
    color: white;
    margin: 0 auto;
`
const P = styled.p`
    padding-bottom: 15px; 
    color: white;
    margin: 0 auto;
`
const Div = styled.div`
    background-image: linear-gradient(to right, #9F6EA3, #FF74A4);
`
const StyledLabel = (props) => {

    return (
        <Div>
            <H1>24 Hour Sale</H1>
            <P>15% OFF SELECT ITEMS</P>
        </Div>
    )
}

export default StyledLabel;