import React from 'react';
import Summary from '../Atom/Summary';
import Options from '../Atom/Option';
import './Headerbox.css'

const Headerbox = () => {
  return (
    <div className="HeaderBox">
      <div className="Summary">
        <Summary />
      </div>
      <div className="options">
        <Options />
      </div>
    </div>
  );
};

export default Headerbox;
