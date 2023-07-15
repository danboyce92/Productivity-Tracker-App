import React, { useState } from 'react';
import Dropdown from './Dropdown';



interface Option {
  value: string;
  label: string;
}

const DropdownActivity: React.FC = () => {

  const [selection, setSelection] = useState(    {
    value: "Select Activity",
    label: 'Select Activity'
  });

  const [entry, setEntry] = useState('');

  const options = [
    {
      value: 'Typescript',
      label: 'Typescript'
    },
    {
      value: 'Italian',
      label: 'Italian'
    },
    {
      value: 'Keyboard',
      label: 'Keyboard'
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

export default DropdownActivity;