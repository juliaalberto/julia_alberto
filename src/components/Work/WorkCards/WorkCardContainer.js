import './WorkCardContainer.css';

import * as React from 'react';
import Users from './List';
import CardInfo from './WorkCard';
 

const WorkExperiences = () =>{
    return(
             <div className ="WorkExperiencesCardsContainer">
                 <div className='WorkExperienceCards'>
                {Users.map((e)=>{
                    return (
                    <CardInfo image={e.image} year={e.year} name={e.name} description={e.description} languages={e.languages}/>
                    );})}
                </div>
            </div>
    );
}
 
export default WorkExperiences;