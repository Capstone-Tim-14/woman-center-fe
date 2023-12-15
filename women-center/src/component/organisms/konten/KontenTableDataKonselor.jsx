import React from 'react'
import TabelDataKonselor from '../../molekul/tabels/TabelDataKonselor'
import HeaderDataKonselor from '../header/headerDataKonselor'

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