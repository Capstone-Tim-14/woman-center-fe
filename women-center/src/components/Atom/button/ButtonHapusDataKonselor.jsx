import React from 'react'
import image from "../../../assets/icon/Delete.png"

function ButtonHapusDataKonselor({onClick, src}) {
  return (
        <button 
            id='btnHapusDataKonselor'
            onClick={onClick}
            style={{border: 'none', background: 'none'}}>
            <img src={image} />
        </button>
  )
}

export default ButtonHapusDataKonselor