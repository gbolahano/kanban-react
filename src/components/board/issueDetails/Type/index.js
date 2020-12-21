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
    // <div>
      <CustomSelect
      isMulti={false}
      data={[
        {
          value: 'bug',
          label:'Bug'
        },
        {
          value: 'task',
          label:'Task'
        },
        {
          value: 'story',
          label:'Story'
        }
      ]}
      selected={status}
      handleChange={handleStatusChange}
    />
    // </div>
   );
}

export default Index;