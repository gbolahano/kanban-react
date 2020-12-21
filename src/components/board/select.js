import React from 'react';

import Select from 'react-select';
// import { colourOptions } from './data';
import './select.scss';

const CustomSelect = ({ isMulti, handleChange, selected, data }) => {
  return (
    <Select
      isMulti={isMulti}
      name="status"
      value={data ? data.find(a => a.value === selected) : ''}
      options={data ? data.map(b => {
        return {
          value: b.value,
          label: b.label
        }
      }) : data}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  )
};

export default CustomSelect;