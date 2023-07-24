import React from 'react';

// ImageFrame requires three props;
// ImageWidth
// ImageHeight
// Source
const ImageFrame = ({Source, ImageWidth, ImageHeight, CSS}) => {
  return <img className={`${CSS}`} src={require(`../images/${Source}`)} alt='logo' width={`${ImageWidth}px`} height={`${ImageHeight}px`}/>
}

export default ImageFrame;
