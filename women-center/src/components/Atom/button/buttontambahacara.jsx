import React from "react";

const ButtonTambahAcara = ({ onClick, label }) => {
    return <button 
    
                className="button-tambah-acara"
                onClick={onClick}
                style={{marginLeft: "210px"}}
                >
                {label}
            </button>
}
export default ButtonTambahAcara