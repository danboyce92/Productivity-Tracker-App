import { useState } from 'react';

import DropdownActivity from "./DropdownActivity";
import DropdownTime from "./DropdownTime";
import { Activity } from '../api/getActivities';
import { createRecord } from '../api/createRecord';

interface ChildProps {
  activityObject: Activity[];
}

export interface Option {
  value: string,
  label: string,
}

const ActivitiesInput: React.FC<ChildProps> = ({ activityObject }) => {
  const [activityName, setActivityName] = useState('');
  const [activityTime, setActivityTime] = useState(0);
  const [selection, setSelection] = useState(    {
    value: "Select Activity",
    label: 'Select Activity'
  });
  const [timeSelection, setTimeSelection] = useState(    {
    value: "Select Time",
    label: 'Select Time'
  });
  const [successMsg, setSuccessMsg] = useState('success-msg-inactive');
  const [emptyFieldError, setEmptyFieldError] = useState('empty-field-error-inactive');

  const handleActivityChange = (selectedActivity: string) => {
    setActivityName(selectedActivity);
  }
  const handleTimeChange = (selectedTime: number) => {
    setActivityTime(selectedTime);
  }
  const handleActivityReset = () => {
    setSelection({
      value: "Select Activity",
      label: 'Select Activity'
    })
    setTimeSelection({
      value: "Select Time",
      label: 'Select Time'
    })
  }
  const triggerSetSelection = (selection: Option) => {
    setSelection(selection)
  }
  const triggerTimeSelection = (selection: Option) => {
    setTimeSelection(selection)
  }

  //Record new activity
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    if (activityName !== '' && activityTime !== 0) {

      //look through activityObject and find activityName then extract category
      const foundActivity = activityObject.find((element) => element.name == activityName);
      await createRecord(activityName, foundActivity?.category, activityTime, now)

      setSuccessMsg('success-msg');

      //Need to reset dropdowns after successfully adding
      handleActivityReset();
      setEmptyFieldError('empty-field-error-inactive');
      setTimeout(() => {
        setSuccessMsg('success-msg-inactive');
      }, 3000);

    } else {
      setEmptyFieldError('empty-field-error');
    }
  }

  return (
    <div id="activities-input">
      <div id="activities-input-title">Activities Input</div>
      <form id="activities-input-display" onSubmit={handleFormSubmit} >
        <div id="activity-dropdown"><DropdownActivity activityObject={activityObject} onActivityChange={handleActivityChange} selection={selection} onSelectChange={triggerSetSelection} /></div>
        <div id="time-dropdown"><DropdownTime onTimeChange={handleTimeChange} timeSelection={timeSelection} onSelectChange={triggerTimeSelection} /></div>
        <button id="record-button">Record Activity</button>
        <div id={emptyFieldError}>* Please ensure you have chosen an activity and a time.</div>
      <div id={successMsg}>Activity successfully recorded!</div>
      </form>
    </div>
  )
}

export default ActivitiesInput;