import React from "react";
import Header from "./component/organisms/header/Header";
import SummaryContainer from "./component/organisms/header/SummaryContainer";
import ModalHapusData from "./component/molekul/modal/modalHapusDataPaket";
import TabelSesi from "./component/molekul/tabels/tabelSesi";
import TabelPaket from "./component/molekul/tabels/tabelPaket";
function App() {
  return (
    <>
    <div className="container-xl">
     <div className="d-flex flex-column align-items-center mt-5 gap-2">
      <Header/>
      <SummaryContainer/>
      <ModalHapusData/>
      <TabelSesi/>
      <TabelPaket/>
     </div>
    </div>
    </>
  )
}

export default App;