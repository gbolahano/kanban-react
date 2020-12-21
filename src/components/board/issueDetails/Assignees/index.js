import React, {useState} from 'react';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';

const Index = () => {
  const [status, setStatus] = useState(null);
  const handleStatusChange = (e) => {
    // console.log(e.map(a => a.value));
    setStatus(e);
  }

  return (
    <div>
      <FormTitle>Assignees</FormTitle>
      <CustomSelect
      isMulti={true}
      data={[
        {
          value: 1,
          label:'John Doe'
        },
        {
          value: 2,
          label:'Baby Yoda'
        },
        {
          value: 3,
          label:'Avery Spencer'
        }
      ]}
      selected={status}
      handleChange={handleStatusChange}
    />
    </div>
   );
}

export default Index;