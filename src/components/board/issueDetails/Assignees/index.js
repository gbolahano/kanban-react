import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
// import CustomSelect from '../../select';
import CustomSelect from './select';
import { assignees } from '../../../shared/constants/selectData';

const UPDATE_ASSIGNEE = gql`
  mutation UPDATE_ASSIGNEE($issueId: Int, $assignee: [Int]) {
    updateIssue(issueId: $issueId, data: {
      assignee: $assignee
      }) {
        assignees{
          id
        }
      }
  }
`;
const Index = ({issue}) => {
  const params = useParams();
  const b = issue.assignees.map(a => ({value: a.id, label: a.name}));
  const [ assign, setAssign ] = useState(b);
  const [updateAssignee, {loading}] = useMutation(UPDATE_ASSIGNEE);
  const handleChange = async (e) => {
    setAssign(e)
    let azz = e;
    let bzz = azz?.map(a => a.value);
    if (typeof bzz != 'undefined') {
      try {
        await updateAssignee({
          variables: {
            issueId: parseInt(params.issueId),
            assignee: bzz
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await updateAssignee({
        variables: {
          issueId: parseInt(params.issueId),
          assignee: [1]
        }
      });
    }
  }
  return (
    <div>
      <FormTitle>Assignees</FormTitle>
      <CustomSelect
        isMulti={true}
        data={assignees}
        value={assign}
        onChange={handleChange}
      />
    </div>
   );
}

export default Index;