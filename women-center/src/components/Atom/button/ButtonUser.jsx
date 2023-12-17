import React from 'react'
import { Button } from "react-bootstrap"

function ButtonUser({type, className, onClick, label}) {
  return (
    <Button
            id='btnDataKonselor'
            type={type}
            className={className}
            onClick={onClick}
            style={{width: '120px'}}>
            {label}
    </Button>
  )
}
export default ButtonUser