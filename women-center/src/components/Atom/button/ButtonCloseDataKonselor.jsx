import React from 'react'
import {AiOutlineClose} from "react-icons/ai";

function ButtonCloseDataKonselor({onClick}) {
  return (
    <button
        id='btn-closeKonselor'
        className="p-1 rounded-1 d-flex justify-items-center border-0"
        style={{background: 'var(--secondary-30, #FFF2E2)'}}
        onClick={onClick}>
        <AiOutlineClose />
    </button>
  )
}

export default ButtonCloseDataKonselor