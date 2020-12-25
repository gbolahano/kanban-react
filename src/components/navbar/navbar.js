import React, { Fragment } from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import lekki from '../../assets/lekki.jpg';
import './navbar.scss';
import Modal from  '../modal/index';
import IssueCreate from '../board/issueCreate';

const Navbar = () => {
  const match = useRouteMatch();
  return (
    <Fragment>
      <div className="navbar">
        <figure>
          <img src={lekki} alt="ic" className="navbar__icon"/>
        </figure>
        <ul>
          <li className="navbar__menu">
            <span className="navbar__menu__icon">
              {/* <i className="fas fa-plus"></i> */}
              <span class="lnr lnr-plus-circle icon"></span>
            </span>
            <p className="navbar__menu__title"><Link to={`${match.url}/create-issue`}>
            CREATE ISSUE</Link></p>
          </li>
        </ul>

      </div>
      <Route
        path={`${match.url}/create-issue`}
        render={() => {
          return (
            <Modal>
              <IssueCreate />
            </Modal>
          )
        }}
      />
    </Fragment>
   );
}

export default Navbar;