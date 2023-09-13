import './WorkCardContainer.css';

import * as React from 'react';
import Users from './List';
import CardInfo from './WorkCard';
 

const WorkExperiences = () =>{
    return(
             <div className ="WorkExperiencesContainer">
                <h1 className='WorkExperiencesTitle'> Experience </h1>
                 <div className='WorkExperienceCards'>
                {Users.map((e)=>{
                    return (
                    <CardInfo year={e.year} name={e.name} description={e.description} languages={e.languages}/>
                    );})}
                </div>
            </div>
    );
}
 
export default WorkExperiences;