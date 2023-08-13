import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";

interface ActivityProp {
  _id: string,
  name: string,
  category: string,
  __v: number
}

interface ChildProps {
  activityObject: ActivityProp[];
}

const ActivitiesEdit: React.FC<ChildProps> = ({ activityObject }) => {
  const [tJToggleEdit, setTJToggleEdit] = useState(false);
  const [tJToggleSmall, setTJToggleSmall] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [activityCategory, setActivityCategory] = useState('');

  const onToggleEdit = () => {
    setTJToggleEdit(!tJToggleEdit);
  }
  const onToggleSmall = () => {
    setTJToggleSmall(!tJToggleSmall);
  }



  const activityMap = activityObject.map((item) => {
    return (
      <div id="map-item" key={item.name}>
        <div id="item-name">{item.name}</div>
        <div id="item-del">X</div>
      
      </div>
    )
  })

  const saveActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/newactivity", {
      method: "POST",
      body: JSON.stringify({
        name: activityName,
        category: activityCategory,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setActivityName('');
    setActivityCategory('');
    
  }

  const getList = async () => {
    // try {
    //   const response = await fetch('http://127.0.0.1:8000/api/activitylist');
    //   if (response.ok) {
    //     const data = await response.json() as string[];
    //     setActivityList(data);
    //   } else {
    //     console.log('There is a problem loading the activity list')
    //   }
    // } catch (error) {
    //   console.error('An error occured', error);
    // }
  }

  useEffect(() => {


  }, [])
 
  return(
    <div id="activities-edit">
      <div id="activities-edit-title">Activities Edit</div>
        <div id="small-toggle"><ToggleButton onToggle={onToggleSmall} left="List" right="Edit" id="sm-tg" /></div>
        <div id="edit-container">
          <form id="add-activities" onSubmit={saveActivity} >
            <div id="add-edit-title">Add/Edit Activities</div>
            <div id="toggle-button"><ToggleButton onToggle={onToggleEdit} left="Add" right="Edit" id="ad-tg" /></div>
            <input id="name-input" type="text" placeholder="Activity..." value={activityName} onChange={(e) => {setActivityName(e.target.value)}} />
            <input id="category-input" type="text" placeholder="Category..." value={activityCategory} onChange={(e) => {setActivityCategory(e.target.value)}} />
            <button id="save-button" >Save Activity</button>
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
