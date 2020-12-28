import React, { Fragment } from 'react';
import { useRouteMatch, Route } from 'react-router-dom';

import lekki from '../../assets/lekki.jpg';
import {Navbar, StyledLink} from './Styles';
import Modal from  '../modal/index';
import IssueCreate from '../board/issueCreate';

const Index = () => {
  const match = useRouteMatch();
  return (
    <Fragment>
      <Navbar>
        <figure>
          <img src={lekki} alt="ic"/>
        </figure>

        <StyledLink to={`${match.url}/create-issue`}>
          <span><i className="fas fa-plus"></i></span>
          <p>CREATE ISSUE</p>
        </StyledLink>

      </Navbar>
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

export default Index;