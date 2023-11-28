import React from 'react';
import Profile from './components/organism/Profile';
import EditProfile from './components/Organism/editProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Medel from './components/Molekul/Modal/FailedSuccesModal';
import Logout from './components/Molekul/Modal/logoutmodal';

function App() {
  return (
    <div className="app">
      <Profile/>
    </div>
  );
}

export default App;
