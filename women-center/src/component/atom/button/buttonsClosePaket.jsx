import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const ButtonClose = ({onClick}) => {
    return (
        <button
            id="btn-closeHapusPaket"
            style={{border: 'none', background: 'var(--secondary-30, #FFF2E2)'}}
            className="p-1 rounded-1 d-flex justify-items-center"
            onClick={onClick}>
            <AiOutlineClose />
        </button>
    )
}
export default ButtonClose