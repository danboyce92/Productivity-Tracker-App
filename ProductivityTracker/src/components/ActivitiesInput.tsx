import DropdownActivity from "./DropdownActivity";
import DropdownTime from "./DropdownTime";


const ActivitiesInput = () => {
  return (
    <div id="activities-input">
      <div id="activities-input-title">Activities Input</div>
      <div id="activities-input-display">
        <div id="activity-dropdown"><DropdownActivity /></div>
        <div id="time-dropdown"><DropdownTime /></div>
        <button id="record-button">Record Activity</button>
      </div>
    </div>
  )
}

export default ActivitiesInput;