import React from 'react';

import Select from 'react-select';

const CustomSelect = ({ isMulti, onChange, data, value }) => {
  // assingeeValues:- array contianing interger values of the assignee
  const assigneeValues = value?.map(v => v.value);
  const defualtVal = (data) => {
    if (data) {
      let defaults = []
      data.find(d => {
        for (let i in assigneeValues) {
          if (d.value == assigneeValues[i]) {
            defaults.push(d);
          }
        }
      })
      return defaults;
    } else {
      return '';
    }
  }
  return (
    <Select
      isMulti={isMulti}
      value={defualtVal(data)}
      options={ data }
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={e => onChange(e) }
    />
  )
};

export default CustomSelect;