import React from 'react';

const PhotoCard = props => {
  return (
    <div className='photo_card' key={props.id}>
      <h2>{props.title}</h2>
      <img src={props.url} />
      <p>{props.explanation}</p>
    </div>
  );
};

export default PhotoCard;
