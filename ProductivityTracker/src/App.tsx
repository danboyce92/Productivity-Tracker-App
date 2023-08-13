import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import './sass/main.scss';
import NavBar from './components/NavBar';
import Activities from './components/Activities';
import ActivitiesInput from './components/ActivitiesInput';
import ActivitiesEdit from './components/ActivitiesEdit';


interface Activity {
  _id: string,
  name: string,
  category: string,
  __v: number
}

function App() {
  const [activityListArray, setActivityListArray] = useState<Activity[]>([]);

  const fetchActivitiesList = async () => {
    const response = await fetch("http://localhost:7000/activities")
    const array = await response.json();
    
    setActivityListArray(array);
    console.log(array)
  }

  useEffect(() => {
    fetchActivitiesList();
  }, [])

  return (
    <>
    <BrowserRouter>
    <div>
      <NavBar />
    </div>
    <div id="main-screen">
    <Routes>
    <Route path="/" element={ < Activities/>} />
    <Route path="input" element={ < ActivitiesInput/>} />
    <Route path="edit" element={ < ActivitiesEdit activityObject={activityListArray} />} />
    </Routes>
    </div>
    </BrowserRouter>

    </>
  )
}

export default App
