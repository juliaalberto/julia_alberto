
import React, { useContext } from 'react'

import ModalOne from './ModalOne';
import ModalTwo from './ModalTwo';
import ModalThree from './ModalThree';
import ModalFour from './ModalFour';
import ModalFive from './ModalFive';

import { ModalContext } from '../WorkModalContainer';

function Modal() {
  const { modal, setModalParams } = useContext(ModalContext)

  const closeModal = (e) => {
    if (e.target.className === "modal__background") setModalParams({ isOpen: false, type: modal.type })
  }

  if (modal.isOpen) {
    return (
      <div className="modal__background" onClick={(e) => closeModal(e)}>
        {modal.type === 'modalOne' && <ModalOne />}
        {modal.type === 'modalTwo' && <ModalTwo />}
        {modal.type === 'modalThree' && <ModalThree />}
        {modal.type === 'modalFour' && <ModalFour />}
        {modal.type === 'modalFive' && <ModalFive />}
      </div>
    )
  } else return (<></>)
}

export default Modal