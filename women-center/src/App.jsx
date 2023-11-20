import React from 'react'; // Import React for JSX usage
import ReactDOM from 'react-dom';
import moment from 'moment';
// fsevents sebaiknya tidak diimpor karena biasanya hanya dibutuhkan di lingkungan pengembangan macOS
import Mainstyle from './main.css';
import Sidebarstyle from './Sidebar.css';
import MainContainer from './Component/MainContainer'; // Sesuaikan path sesuai struktur proyek Anda
import LeftContainer from './Component/LeftContainer';
import RightContainer from './Component/RightContainer'; // Pastikan RightContainer diimpor
import ButtonArtikel from './Component/AddArticleButton';
import UserSection from './Component/UserSection';
import TableSection from './Component/TableSection';
import FilterDate from './Component/FilterDate';
import Sidebar from './Component/Sidebar';


const App = () => {
  // Gunakan konfigurasi Vite di sini
  const viteConfig = defineConfig({
    // ... konfigurasi spesifik untuk penggunaan di dalam komponen ...
  });

  // Lakukan sesuatu dengan konfigurasi Vite
  console.log(viteConfig);

  return (
    <React.StrictMode>
      <Mainstyle />
      <Sidebarstyle />
      <moment />
      {/* Tambahkan komponen-komponen di sini */}
      <MainContainer />
      <LeftContainer />
      <RightContainer />
      <ButtonArtikel />
      <UserSection />
      <TableSection />
      <FilterDate />
      <Sidebar />
    </React.StrictMode>
  );
}

// Render komponen App ke elemen dengan id "root"
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
