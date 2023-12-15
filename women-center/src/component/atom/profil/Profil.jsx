import React from 'react'

function Profil({src}) {
  return (
    <div className="col-4 flex-column" id='profilDatabase'>
        <p className="m-0">Foto Profil</p>
        <img 
            id='imgProfil'
            src={src}
            className="rounded-2 mt-3"
            style={{height: '340px', width: '320px', objectFit: 'cover'}}/>
    </div>
  )
}

export default Profil