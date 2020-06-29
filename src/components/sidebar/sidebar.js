import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';
import lekki from '../../assets/lekki.jpg';

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="project__details">
          <div className="project__details--img">
            <img src={lekki} alt="ic" className="project__details--img--icon"/>
          </div>
          <div className="project__details--title">
            <h3>Kanban board</h3>
            <span>Software roject</span>
          </div>
        </div>

        <div className="menu">
          <ul className="list">
            <li className="list__item">
              <Link className="list__item__link" to="/project/board">
                <span class="lnr icon-custom lnr-layers"></span>
                Kanban Board
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link" to="/project/settings">
                <span class="lnr icon-custom lnr-cog"></span>
              Project Settings
              </Link>
            </li>
          </ul>
        </div>

        <hr className="seperator" />

        <div className="menu-others">
          <ul className="list">
            <li className="list__item">
              <Link className="list__item__link" to="#">
                <span class="lnr icon-custom lnr-book"></span>
                Releases
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link" to="">
                <span class="lnr icon-custom lnr-page-break"></span>
                Issues and filters
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link" to="#">
                <span class="lnr icon-custom lnr-dice"></span>
                Pages
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link" to="">
                <span class="lnr icon-custom lnr-sort-amount-asc"></span>
                Reports
              </Link>
            </li>
            <li className="list__item">
              <Link className="list__item__link" to="#">
                <span class="lnr icon-custom lnr-database"></span>
                Components
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
   );
}

export default Sidebar;