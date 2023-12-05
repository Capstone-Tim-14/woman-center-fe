import React from 'react'
import Header from '../component/organisms/header/HeaderPaket'
import SummaryContainer from '../component/organisms/header/SummaryContainerPaket'
import KontenPaket from '../component/organisms/konten/kontenPaket'

function PagePaket() {
  return (
    <div className='container-xl'>
      <Header />
      <SummaryContainer />
      <KontenPaket />
    </div>
  )
}

export default PagePaket