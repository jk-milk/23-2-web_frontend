import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import NavbarTest from './components/bootstrap/NavbarTest';
import Travels from './pages/Travels';

import TravelForm from './pages/TravelForm';


const App = ()=>{
  return (<>
  {/* <p>안녕하세요?</p> */}
  <Router>    
    <NavbarTest />
    <Routes>    
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/travels' element={<Travels />}/>
      <Route path='/travelForm' element={<TravelForm />}/>
    </Routes>
  </Router>
  </>);
}

export default App;