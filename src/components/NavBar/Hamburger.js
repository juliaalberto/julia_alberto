import * as React from 'react';
  

export default function Burger({isOpen}){
    return (
        <>
        <div className = "hburger">
            <div className = "burger burger1"/>
            <div className = "burger burger2"/>
            <div className = "burger burger3"/>
        </div>

        <style jsx>{`
            .hburger{
                width:2em;
                height: 2em;
                display: flex;
                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 10;
            }

            .burger{
                width: 2rem;
                height: 0.25rem;
                border-radius: 10px;
                background-color: #145858;
                transform-origin: 1px;
                transition: all 0.3s linear;
            }

            .burger1{
                transform: ${isOpen ? 'rotate(45deg)': 'rotate(0)'};
            }

            .burger2{
                transform: ${isOpen ? 'translate(100%)': 'translate(0)'};
                opacity: ${ isOpen ? 0 : 1}
            }

            .burger3{
                transform: ${isOpen ? 'rotate(-45deg)': 'rotate(0)'};
            }
        
        `}
        </style>
        </>
    
    )
  }
