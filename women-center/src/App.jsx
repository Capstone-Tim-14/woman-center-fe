import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditUser from "./page/EditUser"
import DataKonselor from "./page/DataKonselor"
import TabelKonselor from "./component/organisms/TabelKonselor"
import Jadwal from "./page/jadwal"
import TabelUser from "./component/organisms/TabelUser"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<TabelUser />} />
          <Route path="/tabel-konselor" element={<TabelKonselor />} />
          <Route path="/data-konselor" element={<DataKonselor />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/jadwal" element={<Jadwal />} />
        </Routes>
      </Router>

  )
}

export default App
