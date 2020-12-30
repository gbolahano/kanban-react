import React from 'react';
import as from '../../../../assets/project.jpg';

import {Avatar, PrimaryButton, SuccessButton, Button, CommentForm, CommentFormDiv, Name, CommentBody} from './Styles';
import Create from './Create';

const Index = ({ issue }) => {
  return (
    <div>
      <Create />

      <CommentFormDiv>
        {
          issue.comments.map(comment => {
            return (
              <CommentForm>
                <Avatar src={as} width="25px" height="25px" alt="as" />
                <CommentBody>
                  <Name>{comment.user.name}</Name>
                  <div>
                    {comment.body}
                  </div>
                  {/* <PrimaryButton className="btn-success">Save</PrimaryButton>
                  <Button className="btn-success">Cancel</Button> */}
                </CommentBody>
              </CommentForm>
            )
          })
        }
      </CommentFormDiv>
    </div>
   );
}

export default Index;