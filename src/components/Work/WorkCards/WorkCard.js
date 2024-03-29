import React from 'react';
import './WorkCard.css';

import { Fade } from 'react-awesome-reveal';

function CardInfo (props){
  return (
    
    
    <div className='InfoCardItem'>
      
    <Fade cascade>
      <a href= {props.link}>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a href={props.link}>learn more</a>
          <h2> {props.year} </h2>
          </div>
          
          <img src={props.image}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> {props.name} </h1>
              <h3> {props.description}</h3>
            </div>
            <div className='InforCardBottomBottomText'>
              <span> {props.languages.join(' • ')}</span>
            </div>
      
          </div>
          
        </div>
       
      </div>
      
      </a>
      </Fade>
     </div>

     
  )
}
export default CardInfo;