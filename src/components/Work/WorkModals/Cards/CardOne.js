import React from 'react';
import './Cards.css';

import { Fade } from 'react-awesome-reveal';
import AIFS_Photo from './AIFS_group.png'


function CardInfoOne (){
  return (
    
    
    <div className='InfoCardItem' >
      
    <Fade cascade>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a>learn more</a>
          <h2> 2022 - </h2>
          </div>
          
          <img src={AIFS_Photo}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> Website Developer </h1>
              <h3> AIFS - AI Institute for Next Generation Food Systems </h3>
            </div>
            <div className='InforCardBottomBottomText'>
              <span> HTML • CSS • Javascript </span>
            </div>
      
          </div>
          
        </div>
       
      </div>
      
    
      </Fade>
     </div>

     
  )
}
export default CardInfoOne;