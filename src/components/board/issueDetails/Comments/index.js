import React from 'react';
import as from '../../../../assets/1.jpg';

import {Avatar, PrimaryButton, SuccessButton, Button, CommentForm, CommentFormDiv, Name, CommentBody} from './Styles';
import Create from './Create';

const Index = () => {
  return (
    <div>
      <Create />

      <CommentFormDiv>
        <CommentForm>
          <Avatar src={as} width="35px" height="35px" alt="as" />
          <CommentBody>
          <Name>John Doe</Name>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga reiciendis, consequuntur nam ex debitis quisquam excepturi animi harum? Doloremque aliquid sit molestiae ab ullam est, ipsam labore odit fugiat tenetur?
          </div>
          <PrimaryButton className="btn-success">Save</PrimaryButton>
          <Button className="btn-success">Cancel</Button>
        </CommentBody>
        </CommentForm>

      </CommentFormDiv>
    </div>
   );
}

export default Index;