import React from "react";

const ButtonTambah = ({ onClick, label }) => {
    return <button 
                className="btn px-5 bg-button text-white fw-bold" 
                onClick={onClick}>
                {label}
            </button>
}
export default ButtonTambah