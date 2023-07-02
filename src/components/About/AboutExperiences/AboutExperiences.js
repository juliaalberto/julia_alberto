import './AboutExperiences.css';

import * as React from 'react';
import Users from './List';
import Info from './AboutCard';
 

const AboutExperiences = () =>{
    return(
             <div class="AboutExperiencesContainer">
                <h1> Experiences </h1>
                 <div className='AboutExperienceCards'>
                {Users.map((e)=>{
                    return (
                    <Info year={e.year} name={e.name} description={e.description} languages={e.languages}/>
                    );})}
                </div>
            </div>
    );
}
 
export default AboutExperiences;