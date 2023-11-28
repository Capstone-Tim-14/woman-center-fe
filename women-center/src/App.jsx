import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DataKonselor from "./page/DataKonselor"
import TabelKonselor from "./component/organisms/tabelKonselor"
import Jadwal from "./page/jadwal"
import TabelUser from "./component/organisms/tabelUSer"
import DataUser from "./page/DataUser";
import LoginPages from "./page/loginPages";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPages />} />
          <Route path="/" element={<TabelUser />} />
          <Route path="/tabel-konselor" element={<TabelKonselor />} />
          <Route path="/data-konselor" element={<DataKonselor />} />
          <Route path="/data-user" element={<DataUser />} />
          <Route path="/jadwal" element={<Jadwal />} />
        </Routes>
      </Router>

  )
}

export default App
