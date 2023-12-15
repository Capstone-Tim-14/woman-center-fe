import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Konselor from "./page/Konselor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Konselor />}/>
      </Routes>
    </Router>
  )
}

export default App;