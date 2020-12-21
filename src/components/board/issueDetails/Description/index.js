import React, { useState, Fragment } from 'react';
import ReactQuill from 'react-quill';
import {Editor, Title, ReactQuilll, SuccessButton, Button} from './Styles';

const Index = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Title>Description</Title>
      <Editor>
        <ReactQuilll theme="snow" value={value} onChange={setValue}/>
      </Editor>
      <div>
        <SuccessButton>Save</SuccessButton>
        <Button>Cancel</Button>
      </div>
    </div>
   );
}

export default Index;