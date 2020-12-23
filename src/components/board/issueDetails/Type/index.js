import React, {useState} from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';
import { type } from '../../../shared/constants/selectData';


const UPDATE_TYPE = gql`
  mutation UPDATE_TYPE($issueId: Int, $type: IssueType) {
    updateIssue(issueId: $issueId, data: {
      type: $type
      }) {
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