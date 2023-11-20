import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './Sidebar.css';
import moment from 'moment'; // Mengimpor moment
import MainContainer from './Component/MainContainer';
import LeftContainer from './Component/LeftContainer';
import RightContainer from './Component/RightContainer';
import ButtonArtikel from './Component/AddArticleButton';
import UserSection from './Component/UserSection';
import TableSection from './Component/TableSection';
import FilterDate from './Component/FilterDate';
import Sidebar from './Component/Sidebar';

const App = () => {
  // Contoh penggunaan moment di dalam komponen App
  const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <>
      <MainContainer />
      <LeftContainer />
      <RightContainer />
      <ButtonArtikel />
      <UserSection />
      <TableSection />
      <FilterDate />
      <Sidebar />
      {/* Menampilkan waktu saat ini menggunakan moment */}
      <p>Current Date and Time: {currentDateTime}</p>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
