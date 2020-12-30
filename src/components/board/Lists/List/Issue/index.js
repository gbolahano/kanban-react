import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { useRouteMatch } from 'react-router-dom';
import './styles.scss';

import { Container, StyledLink } from './Styles';

const type = issue => {
  switch (issue.type) {
    case 'bug':
      return (
        <span class="lnr icon-custom icon-custom-danger  lnr-warning"></span>
      )
    case 'task':
      return (
        <span class="lnr icon-custom icon-custom-success lnr-bookmark"></span>
      )
    case 'story':
      return (
        <span class="lnr icon-custom icon-custom-info lnr-bookmark"></span>
      )
    default:
      break;
  }
}

const priority = issue => {
  switch (issue.priority) {
    case 'highest':
      return (
        <span class="lnr icon-custom icon-custom-highest lnr-arrow-up"></span>
      )
    case 'high':
      return (
        <span class="lnr icon-custom icon-custom-high lnr-arrow-up"></span>
      )
    case 'medium':
      return (
        <span class="lnr icon-custom icon-custom-medium lnr-arrow-up"></span>
      )
    case 'low':
      return (
        <span class="lnr icon-custom icon-custom-low lnr-arrow-down"></span>
      )
    case 'lowest':
      return (
        <span class="lnr icon-custom icon-custom-lowest lnr-arrow-down"></span>
      )
    default:
      break;
  }
}

const Index = (props) => {
  const match = useRouteMatch();
  return (
    <Draggable draggableId={props.issue.id.toString()} index={props.index}>
      {
        provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <StyledLink to={`${match.url}/issue/${props.issue.id}`}>
            <p>{props.issue.title}</p>
            <div>
              <div>
                {type(props.issue)}
                {priority(props.issue)}
              </div>
              <div>
                {
                  props.issue.assignees.map(assignee => {
                    return (
                      <figure>
                        <img src={assignee.avatarUri} alt="avatar"/>
                      </figure>
                    )
                  })
                }
              </div>
            </div>
            </StyledLink>

          </Container>
        )
      }
    </Draggable>
   );
}

export default Index;