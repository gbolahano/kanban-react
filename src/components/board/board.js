import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ReactQuill from 'react-quill';

import './board.scss';
import as from '../../assets/1.jpg';
import Modal from '../shared/modal';
import IssueCard from './issueCard';
import CustomSelect from './select'

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
      </div>
      <Modal show={show} handleClose={hideModal}>
        <div className="ticket">
          <div className="ticket__bug__type">
            <select className="" value={selectedIssue.type}>
              <option value="bug">BUG</option>
              <option value="task">Task</option>
              <option value="story">Story</option>
            </select>
          </div>
          <p className="ticket__title">{selectedIssue.title}</p>
          <div className="ticket__description">
            <h3>Description</h3>
            {/* <textarea name="" id="" placeholder="Add description..." rows="10" value={selectedIssue.description}></textarea> */}
            <ReactQuill className="editor" value={selectedIssue.description} onChange={handleIssueContentChange} />
          </div>
          <div className="ticket__comment">
            <h3>Comments</h3>
            <div className="ticket__comment__form">
              <img src={as} width="30px" height="30px" alt="as" />
              <textarea name="comment" placeholder="Add a commment..." id="" ></textarea>
              <button className="btn btn-success">Save</button>
            </div>
            {
              selectedIssue.comments ? selectedIssue.comments.map(comment => {
                return (
                  <div className="ticket__comment__display">
                    <div className="top">
                      <img src={comment.user.avatarUri} width="30px" height="30px" alt="as"/>
                      <p className="ticket__comment__display__name">{comment.user.name}</p>
                    </div>
                    <div className="holder">
                      <p className="ticket__comment__display__text">
                        {comment.body}
                      </p>
                      <button className="btn btn-delete">Delete</button>
                    </div>
                  </div>
                )
              }) : null
            }
          </div>
        </div>
        <div className="assign">
          <div className="status">
            <h3 className="label-heading" htmlFor="">Status</h3>
            {/* <select className="select" name="" id="" value={selectedIssue.status}>
              <option value="backlog">Backlog</option>
              <option value="development">Selected for development</option>
              <option value="progress">In progress</option>
              <option value="done">Done</option>
            </select> */}
            <CustomSelect
              data={[
                {
                  value: 'backlog',
                  label:'Backlog'
                },
                {
                  value: 'development',
                  label:'Selected for development'
                },
                {
                  value: 'progress',
                  label:'Progress'
                },
                {
                  value: 'done',
                  label:'Done'
                }
              ]}
              selected={status}
              handleChange={handleStatusChange}
            />
          </div>
          <div className="assignees">
            <h3 className="label-heading" htmlFor="">Assignees</h3>
            {/* <select className="select" name="" id="">
              <option value="John Doe">John Doe</option>
              <option value="Avery Spectre">Avery Spectre</option>
              <option value="Tyler Nun">Tyler Nun</option>
            </select> */}
            <CustomSelect
              assignees={selectedIssue.assignees ? selectedIssue.assignees : ''}
              selected={selected}
              handleChange={handleChange}
            />
            {/* {console.log(selectedIssue.assignees ? selectedIssue.assignees.map(assignee => {
              return {
                value: assignee.id,
                label: assignee.name
              }
            }) : '')} */}
          </div>
          <div className="assignees">
            <h3 className="label-heading" htmlFor="">Reporter</h3>
            <select className="select" name="" id="" value={selectedIssue.reporter ? selectedIssue.reporter.name: ''}>
              <option value="John Doe">John Doe</option>
              <option value="Avery Spectre">Avery Spectre</option>
              <option value="Tyler Nun">Tyler Nun</option>
            </select>
          </div>
          <div className="priority">
            <h3 className="label-heading" htmlFor="">Priority</h3>
            <select className="select" name="" id="" value={selectedIssue.priority}>
              <option value="highest">Highest</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="lowest">Lowest</option>
            </select>
          </div>
        </div>
      </Modal>
    </Fragment>
   );
}

export default Board;