import React from 'react';
import './WorkCard.css';

function CardInfo (props){
  return (
    <div className='InfoCardItem'>
      
      <div className='InfoCardHover'>
        <a href={props.link}>learn more</a>
      </div>
      
      <div className='InfoCardContainer'>
          <h2> {props.year} </h2>
          <img src={props.image}></img>
          <div className='InfoCardBottom'>
            <h1> {props.name} </h1>
            <h3> {props.description}</h3>
            <span> {props.languages.join(' ')}</span>
          </div>
      </div>

     </div>
  )
}
export default CardInfo;