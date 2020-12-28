import React from 'react';
import as from '../../../../../assets/lekki.jpg';

import {Avatar, Title, Button, CommentForm, CommentFormDiv, CommentTextArea} from './Styles';

const Index = () => {
  return (
    <div>
      <Title>Comments</Title>
      <CommentFormDiv>
        <CommentForm>
          <Avatar src={as} width="35px" height="35px" alt="as" />
          <CommentTextArea name="comment" placeholder="Add a commment..." id="" ></CommentTextArea>
        </CommentForm>
        <div>
          <Button>Save</Button>
        </div>
      </CommentFormDiv>
    </div>
   );
}

export default Index;