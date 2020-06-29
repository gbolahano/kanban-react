import React from 'react';

import Select from 'react-select';
// import { colourOptions } from './data';
import './select.scss';

const CustomSelect = ({ assignees, handleChange, selected, data }) => {
  return (
    <Select
      isMulti
      name="colors"
      value={assignees ? assignees.find(assignee => assignee.value === selected) : ''}
      options={assignees ? assignees.map(assignee => {
        return {
          value: assignee.id,
          label: assignee.name
        }
      }) : data}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  )
};

export default CustomSelect;