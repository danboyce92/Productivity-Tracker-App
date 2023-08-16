import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import './sass/main.scss';
import NavBar from './components/NavBar';
import Activities from './components/Activities';
import ActivitiesInput from './components/ActivitiesInput';
import ActivitiesEdit from './components/ActivitiesEdit';
import { getActivities, Activity } from './api/getActivities';
import { deleteActivity } from './api/deleteActivity';


function App() {
  const [activityListArray, setActivityListArray] = useState<Activity[]>([]);

  const fetchActivitiesList = async () => {
    const array = await getActivities()
    
    setActivityListArray(array);
    console.log(array)
  }

  useEffect(() => {
    fetchActivitiesList();
  }, [])

  //Does not actually create activity just updates list automatically
  const handleCreateActivity = async (newActivity: Activity) => {
    const toBeAdded = newActivity;
    setActivityListArray([...activityListArray, toBeAdded]);
  }

  const handleActivityDelete = async (activityId: string) => {
    await deleteActivity(activityId)
  setActivityListArray(activityListArray.filter((activity) => activity._id !== activityId))
};

  return (
    <>
    <BrowserRouter>
    <div>
      <NavBar />
    </div>
    <div id="main-screen">
    <Routes>
    <Route path="/" element={ < Activities/>} />
    <Route path="input" element={ < ActivitiesInput activityObject={activityListArray} />} />
    <Route path="edit" element={ < ActivitiesEdit activityObject={activityListArray} onCreate={handleCreateActivity} onDelete={handleActivityDelete} />} />
    </Routes>
    </div>
    </BrowserRouter>

    </>
  )
}

export default App
