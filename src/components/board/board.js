import React, { Fragment, useState } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ReactQuill from 'react-quill';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './board.scss';
import as from '../../assets/1.jpg';
import Modal from '../shared/modal';
import IssueCard from './issueCard';
import CustomSelect from './select'
import Modall from '../modal/index';
import IssueDetails from '../board/issueDetails/Index';

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
        name
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

const Board = () => {
  // console.log(props);
  const match = useRouteMatch();
  const history = useHistory();
  const [show, setState] = useState(false);
  const showModal = () => setState(true);
  const hideModal = () => setState(false);

  const [selectedIssue, setSelectedIssue] = useState({});

  const handleIssue = (issue) => {
    setSelectedIssue({...issue})
  }
  const [selected, setSelected] = useState(null);
  const handleChange = (selected) => {
    // console.log(selected)
    setSelected(selected);
  }
  const [status, setStatus] = useState(null);
  const handleStatusChange = (status) => {
    // console.log(selected)
    setStatus(status);
  }
  const { loading, error, data } = useQuery(ISSUES);

  if (loading) return 'Loading...';
  if (error) return 'Error!!';

  // console.log(data.Issues);

  const backlog = data.Issues.filter(issue => issue.status === 'backlog');
  const development = data.Issues.filter(issue => issue.status === 'development');
  const progress = data.Issues.filter(issue => issue.status === 'progress');
  const done = data.Issues.filter(issue => issue.status === 'done');


  return (
    <Fragment>
      <div className="board">
        <section className="breadcrumbs">
          Projects / kanban 1.0 ok / Kanban Board
        </section>
        <section className="title">
          <h2>Kanban Board</h2>
          <button> <i className="fab fa-github"></i> Github Repo</button>
        </section>
        <section className="filters">
          <div className="filters__users">
            <figure>
              <img src={as} alt=""/>
            </figure>
            <figure>
              <img src={as} alt=""/>
            </figure>
            <figure>
              <img src={as} alt=""/>
            </figure>
          </div>
          <button>Only My Issues</button>
        </section>
        <section className="issues">
          <div className="issues__backlog">
            <h3>BACKLOG {backlog.length}</h3>
            {
              backlog.map(issue =>
                <IssueCard
                  showModal={showModal}
                  issue={issue}
                  setSelectedIssue={handleIssue} />)
              }
          </div>
          <div className="issues__development">
            <h3>SELECTED FOR DEVELOPMENT {development.length}</h3>
            {
              development.map(issue =>
                <IssueCard
                  showModal={showModal}
                  issue={issue}
                  setSelectedIssue={handleIssue}
                />)
            }
          </div>
          <div className="issues__progress">
          <h3>IN PROGRESS {progress.length}</h3>
          {
            progress.map(issue =>
              <IssueCard
                showModal={showModal}
                issue={issue}
                setSelectedIssue={handleIssue}
              />)
          }
        </div>
          <div className="issues__done">
              <h3>Done {done.length}</h3>
              {
                done.map(issue =>
                  <IssueCard
                    showModal={showModal}
                    issue={issue}
                    setSelectedIssue={handleIssue}
                  />)
              }
            </div>
        </section>
        <Link to={`${match.url}/issue/35389`}>View Modal</Link>

        <Route
          path={`${match.url}/issue/:issueId`}
          render={(routeProps) => {
            return (
              <Modall
                // onClick={() => {
                //   history.push(match.url)
                // }}
              >
                <IssueDetails routeProps={routeProps} />
              </Modall>
            )
          }}
        />

      </div>
      {/* show={show} */}
     {/* put old modal here */}
    </Fragment>
   );
}

export default Board;