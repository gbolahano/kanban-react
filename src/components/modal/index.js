import React, { Component } from 'react'
import { createPortal } from 'react-dom';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(9,30,66,.31)',
  overflowY: 'scroll'
}

const main =  {
  position: 'relative',
  margin: '0 auto',
  marginTop: '30px',
  display: 'block',
  // backgroundColor: '#fff',
  // top:'50%',
  // left:'50%',
  // transform: 'translate(-50%,-50%)',
  width: '75%',
  // padding: '5px',
  // overflowY: 'scroll'
}

class Modal extends Component {
  render() {
    return createPortal(
      <div style={modalStyle} onClick={this.props.onClick}>
        <div style={main}>
        {this.props.children}
        </div>
      </div>,
      document.getElementById('modal_root')
    );
  }
}

export default Modal;