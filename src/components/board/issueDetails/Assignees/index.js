import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
// import CustomSelect from '../../select';
import CustomSelect from './select';
import { assignees } from '../../../shared/constants/selectData';
import { ISSUES } from '../../board';

const UPDATE_ASSIGNEE = gql`
  mutation UPDATE_ASSIGNEE($issueId: Int, $assignee: [Int]) {
    updateIssue(issueId: $issueId, data: {
      assignee: $assignee
      }) {
        id
        assignees{
          id
          name
          avatarUri
          createdAt
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
          },
          update: (cache, {data: {updateIssue}}) => {
            // read query data from cache
            let d = cache.readQuery({ query: ISSUES });
            // find the data to be updated from the cached data
            let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
            // update the data accordingly
            issueIndex.assignees = updateIssue.assignees;
            // write the data back to the cache
            cache.writeQuery({ query: ISSUES, data: d });
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