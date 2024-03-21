import * as React from 'react';

import { useState } from 'react';
import './WorkModalContainer.css'
import Modal from './Modals/Modals';

import CardInfoOne from './Cards/CardOne';
import CardInfoTwo from './Cards/CardTwo';
import CardInfoThree from './Cards/CardThree';


export const ModalContext = React.createContext(null)

export function WorkModalContainer() {

    const [modal, setModal] = useState({ isOpen: false, type: 'login' })
  
    const setModalParams = ({ isOpen, type }) => {
      setModal({ isOpen, type })

    }

    return(
        <div className ="WorkExperiencesCardsContainer">
            <ModalContext.Provider value={{ modal, setModalParams }}>
                <Modal />
                 <div className='WorkModalCards'>
                {/* {Users.map((e)=>{
                    return (
                    <CardInfo link={e.link} image={e.image} year={e.year} name={e.name} description={e.description} languages={e.languages}/>
                    );})} */}

                    <div onClick={() => setModalParams({ isOpen: true, type: 'modalOne' })}><CardInfoOne /></div>
                    <div onClick={() => setModalParams({ isOpen: true, type: 'modalTwo' })}><CardInfoTwo /></div>
                    <div onClick={() => setModalParams({ isOpen: true, type: 'modalThree' })}><CardInfoThree /></div>
                </div>

            </ModalContext.Provider>
            </div>
    );
}