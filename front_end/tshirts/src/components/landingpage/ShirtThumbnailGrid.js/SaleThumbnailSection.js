import React, { Component } from 'react';
import StyledLabel from './StyledLabel';
import GridImage from './GridImage';
import RoundedButton from './RoundedButton';

class SaleThumbnailSection extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <StyledLabel />
                <GridImage />
                <RoundedButton />
            </div>
        )
    }
}

export default SaleThumbnailSection;