import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import './sass/main.scss';
import NavBar from './components/NavBar';
import Activities from './components/Activities';
import ActivitiesInput from './components/ActivitiesInput';

function App() {

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
    </Routes>
    </div>
    </BrowserRouter>

    </>
  )
}

export default App
