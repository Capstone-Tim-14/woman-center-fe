import React from 'react';
import Layout from "./components/Layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalTambahAcara from './components/Molekul/Modal/modalTambahAcara';
import ModalEditAcara from './components/Molekul/Modal/modalEditAcara';
function App() {
  return (
    <div className="app">
      {/* <Layout /> */}
      <ModalEditAcara />
    </div>
  );
}

export default App;
