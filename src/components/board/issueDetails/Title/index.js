import React, {Fragment, useState} from 'react';
import { useParams } from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

import {ISSUES} from '../../board';
import {TitleTextArea} from './Styles';

const UPDATE_TITLE = gql`
  mutation UPDATE_TITLE($issueId: Int, $title: String) {
    updateIssue(issueId: $issueId, data: {
      title: $title
      }) {
        id
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
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.title = updateIssue.title;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
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