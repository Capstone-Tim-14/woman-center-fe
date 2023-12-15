import React from 'react'
import { Form } from "react-bootstrap"

function CheckboxDataKonselor({id, value, label, checked, onChange}) {
  return (
    <Form.Check
        type="checkbox"
        key={id}
        id={id}
        value={value}
        label={label}
        checked={checked}
        onChange={onChange}
    />
  )
}

export default CheckboxDataKonselor