import React from 'react'
import { FormControl } from 'react-bootstrap'

function InputanDataKonselor({type, name, placeholder, value, onChange, autoFocus}) {
  return (
    <div id='inputanDataKonselor'>
        <FormControl 
            id='inputan-dataKonselor'
            className="px-3 py-2"
            type={type}
            name={name}
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            autoFocus={autoFocus}
            style={{ backgroundColor: "var(--third-color)" }}/>
    </div>
  )
}

export default InputanDataKonselor