import React, { useState } from 'react'; // Import React for JSX usage

import Bootsrap from './react-bootstrap';
import MainContainer from './Component'; // Sesuaikan path sesuai struktur proyek Anda
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import ButtonArtikel from './AddArticleButton';
import UserSection from './UserSection';
import TableSection from './TableSection';
import FilterDate from './FilterDate';
import Sidebar from './Sidebar';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MainContainer />
      <LeftContainer />
      <ButtonArtikel />
      <UserSection />
      <TableSection />
      <FilterDate />
      <Sidebar />
    </div>
  );
}

export default App;
