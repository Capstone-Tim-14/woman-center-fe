import React from 'react'
import '../../styles/cardprofil.css'

function CardProfil() {
  return (
    <>
      <div id='cardprofil' className='rounded-3 shadow px-3 py-3 d-flex gap-3 align-items-center'>
          <div className='col-5 justify-content-center d-flex'>
            <img src="src/assets/image 4.png" alt="" 
              className='rounded-circle' 
              id='image'/>
          </div>
          <div className='col-6 d-flex flex-column gap-2'>
            <p className='m-0' id='nama'>Sedang Butuh Dukungan</p>
            <p className='m-0 p-1 rounded-5 text-center text-white' id='sesi'>2x Sesi</p>
        </div>
      </div>
    </>
  )
}

export default CardProfil