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

const StyledLabel = (props) => {

    return (
        <div>
            <h2>{ props.title } </h2>
            <p>{ props.subtitle }</p>
        </div>

    )
}

export default StyledLabel;