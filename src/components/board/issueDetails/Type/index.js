import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import CustomSelect from '../../select';
import { type } from '../../../shared/constants/selectData';
import {ISSUES} from '../../Lists';

const UPDATE_TYPE = gql`
  mutation UPDATE_TYPE($issueId: Int, $type: IssueType) {
    updateIssue(issueId: $issueId, data: {
      type: $type
      }) {
        id
        type
      }
  }
`;
const Index = ({ issue }) => {
  const params = useParams();
  const [ typee, setType ] = useState(issue.type);
  const [updateType, {loading}] = useMutation(UPDATE_TYPE);
  const handleChange = async (e) => {
    setType(e.value)
    await updateType({
      variables: {
        issueId: parseInt(params.issueId),
        type: e.value
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.type = updateIssue.type;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
      }
    });
  }
  return (
    <CustomSelect
      isMulti={false}
      data={type}
      value={typee}
      onChange={handleChange}
    />
   );
}

export default Index;