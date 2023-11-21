import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import MainContainer from './Components/organisms/MainContainer';

const App = () => {
  return (
    <>
      <MainContainer />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
