import React from 'react'
import { TbDownload } from "react-icons/tb";

function ButtonsDownload({onClick}) {
  return (
    <button
            id='btn-downloadPaket'
            style={{border: 'none', background: 'var(--secondary-30, #FFF2E2)'}}
            className="p-1 rounded-1 d-flex justify-items-center"
            onClick={onClick}>
            <TbDownload />
        </button>
  )
}

export default ButtonsDownload