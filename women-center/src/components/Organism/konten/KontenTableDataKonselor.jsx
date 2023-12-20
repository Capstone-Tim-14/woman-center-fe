import React from 'react'
import TabelDataKonselor from "../../Molekul/tabels/TabelDataKonselor"
import HeaderDataKonselor from '../../Organism/header/headerDataKonselor'

function KontenTableDataKonselor() {
  return (
    <>
      <div className='container-xl'>
        <div className='d-flex flex-column gap-4'>
          <HeaderDataKonselor />
          <TabelDataKonselor />
        </div>
      </div>
    </>
  )
}

export default KontenTableDataKonselor