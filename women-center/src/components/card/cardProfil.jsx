import React from 'react'
import '../../styles/cardprofil.css'

function CardProfil({src, names, session}) {
  return (
    <>
      <div id='cardprofil' className='rounded-4 shadow px-3 py-3 d-flex gap-3 align-items-center'>
          <div className='col-5 justify-content-center d-flex'>
            <img src={src} alt="" 
              className='rounded-circle' 
              id='image'/>
          </div>
          <div className='col-6 d-flex flex-column gap-3'>
            <p className='m-0' id='nama'>{names}</p>
            <p className='m-0 rounded-5 text-center text-white' id='sesi'>
              {session}
            </p>
        </div>
      </div>
    </>
  )
}

export default CardProfil