import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import './sass/main.scss';
import NavBar from './components/NavBar';
import Activities from './components/Activities';

function App() {

  return (
    <>
    <BrowserRouter>
    <div>
      <NavBar />
    </div>
    <div>
    <Routes>
    <Route path="/" element={ < Activities/>} />

    </Routes>
    </div>
    </BrowserRouter>

    </>
  )
}

export default App
