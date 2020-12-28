import React, { Fragment } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import Modal from '../modal/index';
import IssueDetails from './issueDetails/Index';
import { Container } from './Styles';
import Header from './Header';
import Filter from './Filters';
import Lists from './Lists';

const Index = () => {
  const match = useRouteMatch();
  const history = useHistory()

  return (
    <Fragment>
      <Container>
        <Header />
        <Filter />
        <Lists />

        <Route
          path={`${match.url}/issue/:issueId`}
          render={(routeProps) => {
            return (
              <Modal
                // onClick={() => {
                //   history.push(match.url)
                // }}
              >
                <IssueDetails routeProps={routeProps} />
              </Modal>
            )
          }}
        />

      </Container>
    </Fragment>
   );
}

export default Index;