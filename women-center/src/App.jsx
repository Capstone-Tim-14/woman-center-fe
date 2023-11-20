import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import MainContainer from './Component/MainContainer';
import UserSection from './Component/UserSection';
import TableSection from './Component/TableSection';

const App = () => {
  return (
    <>
      <MainContainer />
      <UserSection />
      <TableSection />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
