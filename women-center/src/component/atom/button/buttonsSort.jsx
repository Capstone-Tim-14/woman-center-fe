import React from 'react'
import { TbArrowsSort } from "react-icons/tb";

function ButtonsSort({onClick}) {
  return (
    <button
      id='btn-sort'
      style={{background: 'none', border: 'none',paddingLeft: '5px'}}
      onClick={onClick}>
      <TbArrowsSort />
    </button>
  )
}

export default ButtonsSort