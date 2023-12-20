import React from 'react'
import Header from '../components/Organism/header/HeaderPaket'
import SummaryPaket from '../components/Organism/SummaryPaket'
import KontenPaket from '../components/Organism/konten/kontenPaket'

function PaketPage() {
  return (
    <div className="main-container">
      <Header />
      <div className="sub-containers">
        <SummaryPaket />
      </div>
      <KontenPaket />
    </div>
  )
}

export default PaketPage