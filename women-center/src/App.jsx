import React from "react";
import Header from "./component/organisms/header/Header";
import Buttons from "./component/atom/button/buttons";
import ModalHapusData from "./component/molekul/modal/modalHapusDataPaket";
import TabelSesi from "./component/molekul/tabels/tabelSesi";
import TabelPaket from "./component/molekul/tabels/tabelPaket";
function App() {
  return (
    <>
    <div className="container-xl">
     <div className="d-flex flex-column align-items-center mt-5 gap-2">
      <Header/>
      <Buttons teks="Batal"/>
      <Buttons teks="Hapus"/>
      <ModalHapusData/>
      <TabelSesi/>
      <TabelPaket/>
     </div>
    </div>
    </>
  )
}

export default App;