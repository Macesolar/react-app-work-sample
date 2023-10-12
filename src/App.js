//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import React,{ useState } from 'react';
import Top from './compo/Top';
import Right from './compo/Right';
import Left from './compo/Left';
import Sidebar from './compo/SideBar';
import Popup from './Modal/Popup';

function App() {
    const [showPopup, setShowPopup] = useState(false);

  
  const handleClose = () => setShowPopup(false);

  return (
    <div className="App">
      <NavBar setModals={setShowPopup} openModal={showPopup}/>
      <Sidebar />
      <Banner />
      <div className='app-body'>
      
        <div style={{width: '100%'}}>
          <Right />
          </div>

        <div style={{width: '100%'}}>
          <Top />
        </div>       
      
        <div style={{width: '100%'}}>
          <Left />
        </div>
      </div>
      
     {showPopup && (<Popup show={showPopup} handleClose={handleClose} />)}
         
    </div>
  );
}

export default App;