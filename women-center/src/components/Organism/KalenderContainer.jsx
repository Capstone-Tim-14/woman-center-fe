import React from 'react';
import KalenderLeft from './KalenderLeft';
import NoteKalender from './NoteKalender';

const KalenderContainers = () => {
  return (
    <div className="sub-containers">
      <KalenderLeft />
      <NoteKalender />
    </div>
  );
};

export default KalenderContainers;