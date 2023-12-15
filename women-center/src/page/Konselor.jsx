import React from 'react'
import HeaderDataKonselor from '../component/organisms/header/headerDataKonselor'
import TabelDataKonselor from '../component/molekul/tabels/TabelDataKonselor'

function Konselor() {
  return (
    <>
      <div className='container-xl'>
        <HeaderDataKonselor />
        <TabelDataKonselor />
      </div>
    </>
  )
}

export default Konselor