import React from 'react';
import './WorkCard.css';

function CardInfo (props){
  return (
    <div className='InfoCardItem'>
      
      <div className='InfoCardContainer'>
      
       <img src={props.image}></img>
      
        <div className='InfoCardTop'>
          <a href={props.link}>learn more</a>
          <h2> {props.year} </h2>
        </div>
          
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