import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { priority } from '../../../shared/constants/selectData';
import IssueCard from '../../issueCard';

const UPDATE_PRIORITY = gql`
  mutation UPDATE_PRIORITY($issueId: Int, $priority: Priority) {
    updateIssue(issueId: $issueId, data: {
      priority: $priority
      }) {
        priority
      }
  }
`;
const Index = ({ issue }) => {
  const params = useParams();
  const [ priorityy, setPriority ] = useState(issue.priority);
  const [updatePriority, {loading}] = useMutation(UPDATE_PRIORITY);
  const handleChange = async (e) => {
    setPriority(e.value);
    await updatePriority({
      variables: {
        issueId: parseInt(params.issueId),
        priority: e.value
      }
    });
  }

  return (
    <div>
      <FormTitle>Priority</FormTitle>
      <CustomSelect
        isMulti={false}
        data={priority}
        value={priorityy}
        onChange={handleChange}
      />
    </div>
   );
}

export default Index;