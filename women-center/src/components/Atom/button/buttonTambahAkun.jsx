import React from "react";

const ButtonTambah = ({ onClick, label }) => {
    return <button 
                className="btn bg-button text-white fw-medium  rounded-4"
                onClick={onClick}
                style={{width: '200px'}}>
                {label}
            </button>
}
export default ButtonTambah