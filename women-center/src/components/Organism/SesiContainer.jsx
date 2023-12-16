import React from 'react';
import SesiLeftContainer from './SesiLeftContainer';
import SesiRightContainer from './SesiRightContainer';

const SesiContainers = () => {
  return (
    <div className="sub-containers" style={{marginTop: "-100px"}}>
      <SesiLeftContainer />
      <SesiRightContainer />
    </div>
  );
};

export default SesiContainers;