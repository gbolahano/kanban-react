import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import lekki from '../../assets/lekki.jpg';
import './navbar.scss';
import Modal from '../shared/modal';

const Navbar = () => {
  const [show, setState] = useState(false);
  const showModal = () => setState(true);
  const hideModal = () => setState(false);
  return (
    <Fragment>
      <div className="navbar">
        <figure>
          <img src={lekki} alt="ic" className="navbar__icon"/>
        </figure>

        {/* <div className="navbar__menu">
          <span className="navbar__menu__icon">
            <i className="fas fa-plus"></i>
          </span>
          <p className="navbar__menu__title"><Link to="/project/create">
          CREATE ISSUE</Link></p>
        </div> */}
        <ul>
          <li className="navbar__menu">
            <span className="navbar__menu__icon">
              {/* <i className="fas fa-plus"></i> */}
              <span class="lnr lnr-plus-circle icon"></span>
            </span>
            <p className="navbar__menu__title"><Link to="/?create-issue=true" onClick={showModal}>
            CREATE ISSUE</Link></p>
          </li>
        </ul>

      </div>
      <Modal className="modal-main-nav" show={show} handleClose={hideModal}>
        <form>
          <div className="form__group">
            <label htmlFor="">Issue Type</label>
            <select name="" id="">
              <option value="">Bug</option>
              <option value="">Story</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="">Short Summary</label>
            <input type="text" className="form__input"/>
          </div>
          <div className="form__group">
            <label htmlFor="">Description</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="form__group">
            <label htmlFor="">Reporter</label>
            <select name="" id="">
              <option value="">Lord Gaben</option>
              <option value="">Baby Yoda</option>
              <option value="">John Doe</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="">Assignees</label>
            <select name="" id="">
              <option value="">Lord Gaben</option>
              <option value="">Baby Yoda</option>
              <option value="">John Doe</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="">Priority</label>
            <select name="" id="">
              <option value="">Highest</option>
              <option value="">High</option>
              <option value="">Lowest</option>
              <option value="">Low</option>
            </select>
          </div>
        </form>
      </Modal>
    </Fragment>
   );
}

export default Navbar;