import React from 'react'
import { Droppable } from 'react-beautiful-dnd';

import { Container, Title, Issues } from './Styles';
import Issue from './Issue';
const Index = (props) => {
  return (
    <Container>
      <Title>{props.column} {props.issues.length}</Title>
      <Droppable droppableId={props.status}>
        {provided => (
          <Issues
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            { props.issues.map((issue, index) => <Issue key={issue.id} issue={issue} index={index} /> )}
            {provided.placeholder}
          </Issues>
        )}
      </Droppable>
    </Container>
   );
}

export default Index;