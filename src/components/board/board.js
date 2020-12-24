import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useRouteMatch } from 'react-router-dom';

import Modal from '../modal/index';
import IssueDetails from '../board/issueDetails/Index';
import { Container } from './Styles';
import Header from './Header';
import Filter from './Filters';
import Lists from './Lists';

const ISSUES = gql`
  query Issues{
    Issues{
      id
      title
      type
      status
      priority
      description
      reporter{
        id
      }
      comments{
        body
        user{
          name
          avatarUri
        }
      }
      assignees{
        id
        name
        avatarUri
        createdAt
      }
    }
  }
`;

const Index = () => {
  const match = useRouteMatch();

  return (
    <Fragment>
      <Container>
        <Header />
        <Filter />
        <Lists />

        <Link to={`${match.url}/issue/1`}>View Modal</Link>

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
export { ISSUES };