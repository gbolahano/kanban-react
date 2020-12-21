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
      <FormTitle>Priority</FormTitle>
      <CustomSelect
        isMulti={false}
        data={[
          {
            value: 'highest',
            label:'Highest'
          },
          {
            value: 'high',
            label:'High'
          },
          {
            value: 'medium',
            label:'Medium'
          },
          {
            value: 'low',
            label:'Low'
          },
          {
            value: 'lowest',
            label:'Lowest'
          }
        ]}
        selected={status}
        handleChange={handleStatusChange}
      />
    </div>
   );
}

export default Index;