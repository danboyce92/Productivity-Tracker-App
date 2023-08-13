import { useState } from 'react';

import DropdownActivity from "./DropdownActivity";
import DropdownTime from "./DropdownTime";
 
interface ActivityProp {
  _id: string,
  name: string,
  category: string,
  __v: number
}

interface ChildProps {
  activityObject: ActivityProp[];
}

const ActivitiesInput: React.FC<ChildProps> = ({ activityObject }) => {
  const [activityName, setActivityName] = useState('');
  const [activityTime, setActivityTime] = useState(0);

  const handleActivityChange = (selectedActivity: string) => {
    setActivityName(selectedActivity);
  }
  const handleTimeChange = (selectedTime: number) => {
    setActivityTime(selectedTime);
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/newactivity", {
      method: "POST",
      body: JSON.stringify({
        name: activityName,
        duration: activityTime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

  }

  return (
    <div id="activities-input">
      <div id="activities-input-title">Activities Input</div>
      <form id="activities-input-display" onSubmit={handleFormSubmit} >
        <div id="activity-dropdown"><DropdownActivity activityObject={activityObject} onActivityChange={handleActivityChange} /></div>
        <div id="time-dropdown"><DropdownTime onTimeChange={handleTimeChange} /></div>
        <button id="record-button">Record Activity</button>
      </form>
    </div>
  )
}

export default ActivitiesInput;