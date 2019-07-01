import React from 'react';

const GridImage = (props) => {

    return (
        <div>
          <img src={require("./GasMask-Black-Male.png")} alt="gas-mask" className="grid-image" />
          <div className='black-bar'>
            <h5 className='shirt-name'>Fish Mask</h5>
            <p className='shirt-price'>$50</p>
          </div>
        </div>
    )
}

export default GridImage;