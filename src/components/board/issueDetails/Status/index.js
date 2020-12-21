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
      <FormTitle>Status</FormTitle>
      <CustomSelect
      isMulti={false}
      data={[
        {
          value: 'backlog',
          label:'Backlog'
        },
        {
          value: 'development',
          label:'Selected for development'
        },
        {
          value: 'progress',
          label:'Progress'
        },
        {
          value: 'done',
          label:'Done'
        }
      ]}
      selected={status}
      handleChange={handleStatusChange}
    />
    </div>
   );
}

export default Index;