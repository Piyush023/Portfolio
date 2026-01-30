import React from 'react';
import './AnimateClick.styles.css';

const AnimateClick = ({ position }) => {
  return (
    <div
      className='ripple'
      style={{
        width: '20px',
        height: '20px',
        top: position.y,
        left: position.x,
      }}
    >
      <div></div>
    </div>
  );
};

export { AnimateClick };
