import React, {Fragment, useState} from 'react';
import { useParams } from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

import {TitleTextArea} from './Styles';

const UPDATE_TITLE = gql`
  mutation UPDATE_TITLE($issueId: Int, $title: String) {
    updateIssue(issueId: $issueId, data: {
      title: $title
      }) {
        title
      }
  }
`;
const Index = ({ issue }) => {
  const params = useParams();
  const [ title, setTitle ] = useState(issue.title);
  const [updateTitle, {loading}] = useMutation(UPDATE_TITLE);
  const handleChange = async (e) => {
    setTitle(e.target.value)
    await updateTitle({
      variables: {
        issueId: parseInt(params.issueId),
        title: e.target.value
      }
    });
  }
  return (
    <Fragment>
      <TitleTextArea
      rows={1}
      value={title}
      onChange={handleChange} />
    </Fragment>
   );
}

export default Index;