import './work.css';

import * as React from 'react';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import WorkLeft from '../../components/WorkLeft/WorkLeft';
import WorkRight from '../../components/WorkRight/WorkRight';

const WorkPage = () =>{
    return(
             <div class="WorkContainer">
                <NavBar />
                <div class = "WorkLandingContainer">
                    <WorkLeft/>
                    <WorkRight/>
                </div>
                <Footer />
            </div>
    );
}
 
export default WorkPage;