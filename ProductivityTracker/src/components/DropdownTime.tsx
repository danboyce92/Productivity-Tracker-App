import React, { useState } from 'react';
import Dropdown from './Dropdown';



interface Option {
  value: string;
  label: string;
}

const DropdownTime: React.FC = () => {

  const [selection, setSelection] = useState(    {
    value: "Select Time",
    label: 'Select Time'
  });

  const [entry, setEntry] = useState('');

  const options = [
    {
      value: '15mins',
      label: '15mins'
    },
    {
      value: '30mins',
      label: '30mins'
    },
    {
      value: '45mins',
      label: '45mins'
    },
    {
      value: '1hr',
      label: '1hr'
    },
    {
      value: '1hr,15min',
      label: '1hr,15min'
    },    {
      value: '1hr,30min',
      label: '1hr,30min'
    },
    {
      value: '1hr,45min',
      label: '1hr,45min'
    },
    {
      value: '2hr',
      label: '2hr'
    }
  ]



  const handleSelect = (option: Option) => {
    setSelection(option);
  };

  const date = new Date().toLocaleDateString();



  return (
    <div className='select-none'>
      <div><Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown></div>
    </div>
  )
}

export default DropdownTime;