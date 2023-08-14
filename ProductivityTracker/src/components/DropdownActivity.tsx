import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Option } from './ActivitiesInput';


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
  selection: {
    value: string,
    label: string,
  };
  onSelectChange: (selection: Option) => void;
  
}

const DropdownActivity: React.FC<DropdownActivityProps> = ({ activityObject, onActivityChange, selection, onSelectChange }) => {



  const options = activityObject.map((item) => {
    return (
      {
        value: item.name,
        label: item.name
      }
    )
  })

  const handleSelect = (option: Option) => {
    onSelectChange(option)
    onActivityChange(option.value);
  };

  return (
    <div className='select-none'>
      <div><Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown></div>
    </div>
  )
}

export default DropdownActivity;