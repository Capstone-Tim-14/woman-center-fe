import React from "react";

const ButtonTambah = ({ onClick, label }) => {
    return <button 
    
                className="btn bg-button text-white fw-medium  rounded-4"
                onClick={onClick}
                style={{background: 'var(--gradient-button-grad, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))', width: '200px', float: 'right'}}>
                {label}
            </button>
}
export default ButtonTambah