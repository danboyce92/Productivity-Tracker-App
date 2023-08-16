import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import { createActivity } from "../api/createActivity";
import { Activity } from "../api/GetActivities";


interface ChildProps {
  activityObject: Activity[];
  onCreate: (newActivity: Activity) => void;
  onDelete: (activityId: string) => void;
}

const ActivitiesEdit: React.FC<ChildProps> = ({ activityObject, onCreate, onDelete }) => {
  const [tJToggleSmall, setTJToggleSmall] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [activityCategory, setActivityCategory] = useState('');
  const [activityNameError, setActivityNameError] = useState('activity-error-field-inactive');
  const [activityCategoryError, setActivityCategoryError] = useState('category-error-field-inactive');
  const [activityExistsError, setActivityExistsError] = useState('activity-exists-error-inactive');

  //Create a function that searches the activity object for the current activity name.
  //If a match is found, return an error saying activity already exists.

  const duplicateSearch = (list: Activity[], name: string) => {
    for (const obj of list) {
      if (obj.name === name) {
        return true;
      }
    }
    return false;
  };


  const onToggleSmall = () => {
    setTJToggleSmall(!tJToggleSmall);
  }


  const activityMap = activityObject.map((item) => {
    return (
      <div id="map-item" key={item._id}>
        <div id="item-name">{item.name}</div>
        <div id="item-del" onClick={() => {onDelete(item._id)}} >X</div>      
        <div id="item-hover">{item.category}</div>
      </div>
    )
  })

  const saveActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activityName == '' && activityCategory == '') {  
      setActivityNameError('activity-error-field-active'); 
      setActivityCategoryError('category-error-field-active');
    } else if (activityName == '') {
      setActivityNameError('activity-error-field-active'); 
    } else if (activityCategory == '') {
      setActivityCategoryError('category-error-field-active');
    } 
    else if (duplicateSearch(activityObject, activityName)) {
      //Error in here
      setActivityExistsError('activity-exists-error');
    }
    
    
    else {
      const newActivity = await createActivity(activityName, activityCategory);
      onCreate(newActivity);
      console.log(`New activity added: ${newActivity}`)
      setActivityName('');
      setActivityCategory('');
      setActivityNameError('activity-error-field-inactive'); 
      setActivityCategoryError('category-error-field-inactive');
      setActivityExistsError('activity-exists-error-inactive');
    }    
  }
 
  return(
    <div id="activities-edit">
      <div id="activities-edit-title">Activities Edit</div>
        <div id="small-toggle"><ToggleButton onToggle={onToggleSmall} left="List" right="Edit" id="sm-tg" /></div>
        <div id="edit-container">
          <form id="add-activities" onSubmit={saveActivity} >
            <div id="add-edit-title">Add/Edit Activities</div>
            <input id="name-input" type="text" placeholder="Activity..." value={activityName} onChange={(e) => {setActivityName(e.target.value)}} />
            <div id={activityNameError}>* Please include an activity..</div>
            <input id="category-input" type="text" placeholder="Category..." value={activityCategory} onChange={(e) => {setActivityCategory(e.target.value)}} />
            <div id={activityCategoryError}>* Please include a category.</div>
            <button id="save-button" >Save Activity</button>
            <div id={activityExistsError}>* This activity already exists!</div>
          </form>
          <div id="edit-current-activities">
            <div id="edit-current-title">Activities List</div>
            <div id="current-list">{activityMap}</div>
          </div>
        </div>
    </div>
  )
}

export default ActivitiesEdit;
