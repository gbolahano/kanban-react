import React from 'react';
import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button className="close" onClick={handleClose}>X</button>
      </section>
    </div>
  )
}

export default Modal;