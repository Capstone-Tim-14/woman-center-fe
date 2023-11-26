// MainBox.jsx
import React from 'react';
import Headerbox from '../Molekul/Headerbox';
import Bodybox from './Container';



const MainBox = () => {
  return (
    <div className="main-box">
      <Headerbox />
      <Bodybox />
    </div>
  );
};

export default MainBox;
