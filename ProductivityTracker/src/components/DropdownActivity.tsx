import React, { useState } from 'react';
import Dropdown from './Dropdown';


interface Option {
  value: string;
  label: string;
}

interface ActivityProp {
  _id: string,
  name: string,
  category: string,
  __v: number
}

interface ChildProps {
  activityObject: ActivityProp[];
  
}

interface DropdownActivityProps extends ChildProps {
  onActivityChange: (selectedActivity: string) => void;
}

const DropdownActivity: React.FC<DropdownActivityProps> = ({ activityObject, onActivityChange }) => {

  const [selection, setSelection] = useState(    {
    value: "Select Activity",
    label: 'Select Activity'
  });

  const options = activityObject.map((item) => {
    return (
      {
        value: item.name,
        label: item.name
      }
    )
  })

  const handleSelect = (option: Option) => {
    setSelection(option);
    onActivityChange(option.value);
  };

  return (
    <div className='select-none'>
      <div><Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown></div>
    </div>
  )
}

export default DropdownActivity;