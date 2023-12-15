import React from "react";

const ButtonTambahAcara = ({ onClick, label }) => {
    return <button 
    
                className="button-tambah-acara"
                onClick={onClick}
                style={{backgroundColor: 'FFF', marginLeft:'0px', borderColor: 'transparent', borderRadius: '5px', color: '#FF5BCD', fontSize: 'medium', padding: '2px'}}>
                {label}
            </button>
}
export default ButtonTambahAcara