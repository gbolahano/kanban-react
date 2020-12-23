import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { status } from '../../../shared/constants/selectData';

const UPDATE_STATUS = gql`
  mutation UPDATE_STATUS($issueId: Int, $status: IssueStatus) {
    updateIssue(issueId: $issueId, data: {
      status: $status
      }) {
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