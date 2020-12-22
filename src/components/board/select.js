import React from 'react';

import Select from 'react-select';
import './select.scss';

const CustomSelect = ({ isMulti, onChange, data, value }) => {
  return (
    <Select
      isMulti={isMulti}
      value={data ? data.find(d => d.value === value) : ''}
      options={ data }
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={e => onChange(e) }
    />
  )
};

export default CustomSelect;