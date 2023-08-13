import React, { useState } from 'react';
import Dropdown from './Dropdown';



interface Option {
  value: string;
  label: string;
}

interface DropdownTimeProps {
  onTimeChange: (selectedTime: number) => void;
}

const DropdownTime: React.FC<DropdownTimeProps> = ({ onTimeChange }) => {

  const [selection, setSelection] = useState(    {
    value: "Select Time",
    label: 'Select Time'
  });



  const options = [
    {
      value: '15mins',
      label: '15mins',
      num: .25
    },
    {
      value: '30mins',
      label: '30mins',
      num: .5,
    },
    {
      value: '45mins',
      label: '45mins',
      num: .75,

    },
    {
      value: '1hr',
      label: '1hr',
      num: 1,
    },
    {
      value: '1hr,15min',
      label: '1hr,15min',
      num: 2.25,
    },    {
      value: '1hr,30min',
      label: '1hr,30min',
      num: 1.5,
    },
    {
      value: '1hr,45min',
      label: '1hr,45min',
      num: 1.75,
    },
    {
      value: '2hr',
      label: '2hr',
      num: 2,
    }
  ]

  const valueConverter = (option: Option) => {
    switch (option.value) {
      case '15mins':
        return 0.25;
        break;
      case '30mins':
        return .5;
        break;
      
      default:
        return 0;
    }
  }


  const handleSelect = (option: Option) => {
    setSelection(option);
    onTimeChange(valueConverter(option))
  };

  const date = new Date().toLocaleDateString();



  return (
    <div className='select-none'>
      <div><Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown></div>
    </div>
  )
}

export default DropdownTime;