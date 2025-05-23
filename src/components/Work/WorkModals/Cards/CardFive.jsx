import React from 'react';
import './Cards.css';

import { Fade } from 'react-awesome-reveal';
import UCD_Youth_Photo from './UCD_Youth_Photo.jpg'


function CardInfoFive (){
  return (
    
    
    <div className='InfoCardItem' >
      
    <Fade cascade>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a>learn more</a>
          <h2> 2024 - 2024 </h2>
          </div>
          
          <img src={UCD_Youth_Photo}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> Craft Lead Counselor</h1>
              <h3> UC Davis Youth Programs </h3>
            </div>
            <div className='InforCardBottomBottomText'>
              <span>  </span>
            </div>
      
          </div>
          
        </div>
       
      </div>
      
    
      </Fade>
     </div>

     
  )
}
export default CardInfoFive;