import React from 'react'
import { TbDownload } from "react-icons/tb";

function ButtonsDownload({onClick}) {
  return (
    <button
            style={{border: 'none'}}
            className="p-1 rounded-1 d-flex justify-items-center"
            onClick={onClick}>
            <TbDownload />
        </button>
  )
}

export default ButtonsDownload