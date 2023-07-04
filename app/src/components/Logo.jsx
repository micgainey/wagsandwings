import React from 'react';

const Logo = ({ImageWidth, ImageHeight}) => {
  return <img src={require('../images/logo.jpeg')} alt='logo' width={`${ImageWidth}px`} height={`${ImageHeight}px`}/>
}

export default Logo;
