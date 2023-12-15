import React from 'react'

function ButtonHapusDataKonselor({onClick, src}) {
  return (
        <button 
            id='btnHapusDataKonselor'
            onClick={onClick}
            style={{border: 'none', background: 'none'}}>
            <img src={src} />
        </button>
  )
}

export default ButtonHapusDataKonselor