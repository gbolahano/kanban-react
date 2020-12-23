import React, { useState, Fragment } from 'react';
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams} from 'react-router-dom';
import ReactQuill from 'react-quill';
import {Editor, Title, ReactQuilll, SuccessButton, Button} from './Styles';

const UPDATE_DESCRIPTION = gql`
  mutation UPDATE_DESCRIPTION($issueId: Int, $description: String) {
    updateIssue(issueId: $issueId, data: {
      description: $description
      }) {
        description
      }
  }
`;

const Index = ({ issue }) => {
  const [updateDescription, {loading}] = useMutation(UPDATE_DESCRIPTION);
  const params = useParams();
  const [value, setValue] = useState(issue.description);
  const [edit, setEdit] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDescription({
      variables: {
        issueId: parseInt(params.issueId),
        description: value
      }
    });
  }
  return (
    <div>
      <Title>Description</Title>
      <form onSubmit={handleSubmit}>
      {
        edit ?
        <Editor>
          <ReactQuilll theme="snow" value={value} onChange={e => setValue(e)}/>
          <div>
            <SuccessButton>{loading ? 'Saving' : 'Save'}</SuccessButton>
            <Button onClick={() => setEdit(0)}>Cancel</Button>
          </div>
        </Editor> :
        <Editor>
          <div dangerouslySetInnerHTML={{__html: value}} onClick={() => setEdit(1)}></div>
        </Editor>
      }
      </form>

    </div>
   );
}

export default Index;