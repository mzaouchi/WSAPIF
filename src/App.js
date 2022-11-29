import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import Profil from './Components/Profil';


function App() {
  return (
    <div>
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<ListUsers/>}/>
        <Route path='/user/:moez' element={<Profil/>}/>
      </Routes>
    </div>
  );
}

export default App;


