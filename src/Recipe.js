import React from 'react';

const Recipe = ({title, url, image}) => {

  return (
    <div className="card">
      <h1>{title}</h1>
      <p><a href={url}>Find out more</a></p>
      <img src={image} alt="" />
    </div>
  );

}

export default Recipe;
