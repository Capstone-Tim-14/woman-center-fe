import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/routers';


function App  () {
  return (
  
    <Router>
      <Routers />
    </Router>
     
  );
};


export default App;
