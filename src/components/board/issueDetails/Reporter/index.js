import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { reporter } from '../../../shared/constants/selectData';

const UPDATE_REPORTER = gql`
  mutation UPDATE_REPORTER($issueId: Int, $reporter: Int) {
    updateIssue(issueId: $issueId, data: {
      reporter: $reporter
      }) {
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