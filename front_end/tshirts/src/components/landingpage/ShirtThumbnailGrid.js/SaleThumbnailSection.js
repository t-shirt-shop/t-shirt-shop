import React, { Component } from 'react';
import StyledLabel from './StyledLabel';
import GridImage from './GridImage';

class SaleThumbnailSection extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <StyledLabel />
                <GridImage />
            </div>
        )
    }
}

export default SaleThumbnailSection;