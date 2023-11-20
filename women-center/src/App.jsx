import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import MainContainer from './Component/MainContainer';
import LeftContainer from './Component/LeftContainer';
import RightContainer from './Component/RightContainer';
import ButtonArtikel from './Component/AddArticleButton';
import UserSection from './Component/UserSection';
import TableSection from './Component/TableSection';


const App = () => {
  return (
    <>
      <MainContainer />
      <LeftContainer />
      <RightContainer />
      <ButtonArtikel />
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
