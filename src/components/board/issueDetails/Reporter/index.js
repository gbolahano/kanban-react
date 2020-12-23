import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { reporter } from '../../../shared/constants/selectData';
import { ISSUES } from '../../board';

const UPDATE_REPORTER = gql`
  mutation UPDATE_REPORTER($issueId: Int, $reporter: Int) {
    updateIssue(issueId: $issueId, data: {
      reporter: $reporter
      }) {
        id
        reporter{
          id
        }
      }
  }
`;
const Index = ({issue}) => {
  const params = useParams();
  const [ rep, setReporter ] = useState(issue.reporter.id);
  const [updateAssignee, {loading}] = useMutation(UPDATE_REPORTER);
  const handleChange = async (e) => {
    setReporter(e.value);
    await updateAssignee({
      variables: {
        issueId: parseInt(params.issueId),
        reporter: e.value
      },
      update: (cache, {data: {updateIssue}}) => {
        // read query data from cache
        let d = cache.readQuery({ query: ISSUES });
        // find the data to be updated from the cached data
        let issueIndex = d.Issues.find(i => i.id == updateIssue.id);
        // update the data accordingly
        issueIndex.reporter = updateIssue.reporter;
        // write the data back to the cache
        cache.writeQuery({ query: ISSUES, data: d });
      }
    });
  }

  return (
    <div>
      <FormTitle>Reporter</FormTitle>
      <CustomSelect
        isMulti={false}
        data={reporter}
        value={rep}
        onChange={handleChange}
      />
    </div>
   );
}

export default Index;