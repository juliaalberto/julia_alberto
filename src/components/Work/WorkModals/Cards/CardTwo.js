import React from 'react';
import './Cards.css';

import { Fade } from 'react-awesome-reveal';
import Include_Photo from './include_group.png'

function CardInfoTwo(){
  return (
    
    
    <div className='InfoCardItem'>
      
    <Fade cascade>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a>learn more</a>
          <h2> 2021 - 2023 </h2>
          </div>
          
          <img src={Include_Photo}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> Technical Lead </h1>
              <h3> #include </h3>
            </div>
            <div className='InforCardBottomBottomText'>
              <span> React.js • Next.js • Web Development </span>
            </div>
      
          </div>
          
        </div>
       
      </div>
      
    
      </Fade>
     </div>

     
  )
}
export default CardInfoTwo;