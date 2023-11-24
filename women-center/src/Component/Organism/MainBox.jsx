// MainBox.jsx
import React from 'react';
import Headerbox from '../molekul/Headerbox';
import Bodybox from './Bodybox';



const MainBox = () => {
  return (
    <div className="main-box">
      <Headerbox />
      <Bodybox />
    </div>
  );
};

export default MainBox;
