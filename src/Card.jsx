import React from 'react';

const Card = ({bg}) => {
  const a = 1;
  const imageStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div className="card">
      <div style={imageStyle} className="imageArea"></div>
    </div>
  );
};

export default Card;