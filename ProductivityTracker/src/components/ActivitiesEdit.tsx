import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";

const ActivitiesEdit = () => {
  const [tJToggleEdit, setTJToggleEdit] = useState(false);
  const [tJToggleSmall, setTJToggleSmall] = useState(false);
  const [activityList, setActivityList] = useState(['']);

  const onToggleEdit = () => {
    setTJToggleEdit(!tJToggleEdit);
  }
  const onToggleSmall = () => {
    setTJToggleSmall(!tJToggleSmall);
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

  const getList = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/activitylist');
      if (response.ok) {
        const data = await response.json() as string[];
        setActivityList(data);
      } else {
        console.log('There is a problem loading the activity list')
      }
    } catch (error) {
      console.error('An error occured', error);
    }
  }

  useEffect(() => {




    getList()
    console.log(activityList)

  }, [])
 
  return(
    <div id="activities-edit">
      <div id="activities-edit-title">Activities Edit</div>
        <div id="small-toggle"><ToggleButton onToggle={onToggleSmall} left="List" right="Edit" id="sm-tg" /></div>
        <div id="edit-container">
          <div id="add-activities">
            <div id="add-edit-title">Add/Edit Activities</div>
            <div id="toggle-button"><ToggleButton onToggle={onToggleEdit} left="Add" right="Edit" id="ad-tg" /></div>
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
