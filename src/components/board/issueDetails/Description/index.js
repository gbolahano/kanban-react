import React, { useState, Fragment } from 'react';
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams} from 'react-router-dom';
import ReactQuill from 'react-quill';
import {Editor, Title, ReactQuilll, SuccessButton, Button} from './Styles';
import {ISSUES} from '../../Lists';

const UPDATE_DESCRIPTION = gql`
  mutation UPDATE_DESCRIPTION($issueId: Int, $description: String) {
    updateIssue(issueId: $issueId, data: {
      description: $description
      }) {
        id
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
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.description = updateIssue.description;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
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