import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import MainContainer from './Components/organisms/MainContainer';
import AddArtikel from './component/pages/AddArtikel';

const App = () => {
  return (
    <>
      <AddArtikel />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
