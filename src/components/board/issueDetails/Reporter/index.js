import React, {useState} from 'react';

import { FormTitle } from './../../../shared/Form/Styles';
import CustomSelect from '../../select';

const Index = () => {
  const [status, setStatus] = useState(null);
  const handleStatusChange = (e) => {
    // console.log();
    setStatus(e);
  }

  return (
    <div>
      <FormTitle>Reporter</FormTitle>
      <CustomSelect
        isMulti={false}
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