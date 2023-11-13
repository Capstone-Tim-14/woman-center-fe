import React from "react";

const ButtonTambah = ({ onClick, label }) => {
    return <button 
                className="btn px-4 bg-button text-white fw-medium" 
                onClick={onClick}>
                {label}
            </button>
}
export default ButtonTambah