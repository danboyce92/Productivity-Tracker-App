import { useState } from "react";
import ToggleButton from "./ToggleButton";

const ActivitiesEdit = () => {
  const [tJToggle, setTJToggle] = useState(false);

  const onToggle = () => {
    setTJToggle(!tJToggle);
  }

  const list = ["Typescript", "Italian", "Keyboard", "Java"];

  const activityMap = list.map((item) => {
    return (
      <div id="map-item" key={item}>
        <div id="item-name">{item}</div>
        <div id="item-del">X</div>
      
      </div>
    )
  }) 
 
  return(
    <div id="activities-edit">
      <div id="activities-edit-title">Activities Edit</div>
        <div id="edit-container">
          <div id="add-activities">
            <div id="add-edit-title">Add/Edit Activities</div>
            <div id="toggle-button"><ToggleButton onToggle={onToggle} /></div>
            <input id="name-input" type="text" placeholder="Activity..." />
            <input id="category-input" type="text" placeholder="Category..." />
            <button id="save-button">Save Activity</button>
          </div>
          <div id="edit-current-activities">
            <div id="edit-current-title">Activities List</div>
            <div id="current-list">{activityMap}</div>
          </div>
        </div>
    </div>
  )
}

export default ActivitiesEdit;
