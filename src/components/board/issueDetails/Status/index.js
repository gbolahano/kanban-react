import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { status } from '../../../shared/constants/selectData';
import {ISSUES} from '../../Lists';

const UPDATE_STATUS = gql`
  mutation UPDATE_STATUS($issueId: Int, $status: IssueStatus) {
    updateIssue(issueId: $issueId, data: {
      status: $status
      }) {
        id
        status
      }
  }
`;
const Index = ({issue}) => {
  const params = useParams();
  const [ statuss, setStatus ] = useState(issue.status);
  const [updateType, {loading}] = useMutation(UPDATE_STATUS);
  const handleChange = async (e) => {
    setStatus(e.value)
    await updateType({
      variables: {
        issueId: parseInt(params.issueId),
        status: e.value
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.status = updateIssue.status;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
      }
    });
  }
  return (
    <div>
      <FormTitle>Status</FormTitle>
      <CustomSelect
        isMulti={false}
        data={status}
        value={statuss}
        onChange={handleChange}
      />
    </div>
   );
}

export default Index;