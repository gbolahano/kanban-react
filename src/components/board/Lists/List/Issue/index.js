import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

import { Container } from './Styles';


const Index = (props) => {
  return (
    <Draggable draggableId={props.issue.id.toString()} index={props.index}>
      {
        provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {props.issue.title}
          </Container>
        )
      }
    </Draggable>
   );
}

export default Index;