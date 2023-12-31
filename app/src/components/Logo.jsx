import React from 'react';

// logo requires two props width and height
const Logo = ({ImageWidth, ImageHeight}) => {
  return <img src={require('../images/logo-withwnw-text.png')} alt='logo' width={`${ImageWidth}px`} height={`${ImageHeight}px`}/>
}

export default Logo;
