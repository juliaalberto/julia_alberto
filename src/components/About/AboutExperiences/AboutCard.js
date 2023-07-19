import React from 'react';
import './AboutCard.css';

function Info (props){
  return (
    <div className='InfoCardContainer'>
      {/* <img src="https://dogsbestlife.com/wp-content/uploads/2022/06/cutest-dog-breeds-scaled-e1655990275393.jpeg"></img> */}
        <h2> {props.year} </h2>
        <div className='InfoCardBottom'>
          <h1> {props.name} </h1>
          <h3> {props.description}</h3>
          <span> {props.languages.join(' ')}</span>
        </div>
 
     </div>
 
  )
}
export default Info;