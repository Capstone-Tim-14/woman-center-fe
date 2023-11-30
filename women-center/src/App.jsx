import React from "react";
import Buttons from "./component/atom/button/buttons";
import ModalHapusData from "./component/molekul/modal/modalHapusData";
function App() {
  return (
    <>
     <div className="d-flex justify-content-center mt-5 gap-2">
      <Buttons teks="Batal"/>
      <Buttons teks="Hapus"/>
      <ModalHapusData/>
     </div>
    </>
  )
}

export default App;