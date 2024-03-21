import React from 'react';
import './Cards.css';

import { Fade } from 'react-awesome-reveal';
import AIFS_Photo from './AIFS_group.png'


function CardInfoTwo(){
  return (
    
    
    <div className='InfoCardItem'>
      
    <Fade cascade>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a>learn more</a>
          <h2> 2023 </h2>
          </div>
          
          <img src={AIFS_Photo}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> AIFS </h1>
              <h3> Description </h3>
            </div>
            <div className='InforCardBottomBottomText'>
              <span> Language 1 Language 2 Language 3 </span>
            </div>
      
          </div>
          
        </div>
       
      </div>
      
    
      </Fade>
     </div>

     
  )
}
export default CardInfoTwo;