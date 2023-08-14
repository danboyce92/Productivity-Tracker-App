import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { valueConverter } from './durationConverter';


interface Option {
  value: string;
  label: string;
}

interface DropdownTimeProps {
  onTimeChange: (selectedTime: number) => void;
  timeSelection: {
    value: string,
    label: string,
  };
  onSelectChange: (selection: Option) => void;
}

const DropdownTime: React.FC<DropdownTimeProps> = ({ onTimeChange, timeSelection, onSelectChange }) => {

  const options = [
    {
      value: '15mins',
      label: '15mins',
    },
    {
      value: '30mins',
      label: '30mins',
    },
    {
      value: '45mins',
      label: '45mins',
    },
    {
      value: '1hr',
      label: '1hr',
    },
    {
      value: '1hr,15min',
      label: '1hr,15min',
    },    {
      value: '1hr,30min',
      label: '1hr,30min',
    },
    {
      value: '1hr,45min',
      label: '1hr,45min',
    },
    {
      value: '2hr',
      label: '2hr',
    }
  ];

  const handleSelect = (option: Option) => {
    onSelectChange(option)
    onTimeChange(valueConverter(option))
  };

  return (
    <div className='select-none'>
      <div><Dropdown options={options} value={timeSelection} onChange={handleSelect}></Dropdown></div>
    </div>
  )
}

export default DropdownTime;