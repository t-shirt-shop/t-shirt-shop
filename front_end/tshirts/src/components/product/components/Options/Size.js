import React from 'react';

const sizes = ["XS", "S", "M", "L", "XL", "2XL"]
const Size = () => {
  return sizes.map(size => <div className="white">{size}</div>);

}
 
export default Size;