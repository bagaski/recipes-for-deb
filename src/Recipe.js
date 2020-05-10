import React from 'react';

const Recipe = ({title, url, image}) => {

  return (
    <div className="card">
      <a href={url}><img src={image} alt="" /></a>
      <h1>{title}</h1>
      <p><a href={url}>Find out more</a></p>
    </div>
  );

}

export default Recipe;
