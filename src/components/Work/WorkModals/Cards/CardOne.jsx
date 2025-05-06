import React from 'react';
import './Cards.css';

import { Fade } from 'react-awesome-reveal';
import CSSA_Photo from './CSSA_group.png'



function CardInfoOne (){
  return (
    
    <div className='InfoCardItem'>
      
    <Fade cascade>
      <div className='InfoCardContainer'>
      
      
      <div className='InfoCardTop'>
        
        <div className='InfoCardTopText'>
          <a>learn more</a>
          <h2> 2022 - 2023 </h2>
          </div>
          
          <img src={CSSA_Photo}></img>
        </div>
        
          
        <div className='InfoCardBottom'>
        
          <div className = "InfoCardBottomText">
          
            <div className='InfoCardBottomTopText'>
                    
              <h1> Project Lead </h1>
              <h3> CSSA - Cognitive Science Student Association </h3>
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