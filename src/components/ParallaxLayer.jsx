import React from 'react';

const ParallaxLayer = ({ className, style, image }) => {
  return (
    <div className={`${className} absolute`} style={{ ...style, backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
  );
};

export default ParallaxLayer;
