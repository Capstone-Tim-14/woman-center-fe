import React from 'react'

function ButtonTambahAkunKonselor({onClick, label}) {
  return (
    <button 
        id='btnTambahAkunKonselor'
        className="btn text-white fw-medium rounded-4"
        onClick={onClick}
        style={{
            width: '200px', 
            background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
            fontFamily: 'Istok Web'}}>
        {label}
    </button>
  )
}

export default ButtonTambahAkunKonselor