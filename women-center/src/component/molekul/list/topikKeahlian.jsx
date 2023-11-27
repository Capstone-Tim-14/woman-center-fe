import React, { useState } from 'react'
import CheckBox from '../../atom/checkbox/checkBox'
import { Form } from 'react-bootstrap'

function TopikKeahlian() {

  const intialCheckboxValue = [
    {label: 'Trauma', value: 'trauma', checked: false},
    { label: 'Depresi', value: false },
    { label: 'Keluarga', value: false },
    { label: 'Hubungan', value: false },
    { label: 'Karir', value: false },
    { label: 'Phobia', value: false },
    { label: 'Pernikahan', value: false },
    { label: 'Kekerasan', value: false },
    { label: 'Anak & Remaja', value: false },
    { label: 'Gangguan Kepribadian', value: false },
    { label: 'Perilaku', value: false },
    { label: 'Konflik', value: false },
    { label: 'Perkembangan Diri', value: false },
    { label: 'Kecemasan', value: false },
  ]

  return (
    <>
    <div className='d-flex flex-column gap-3'>
      <p className='m-0'>Topik Keahlian</p>
      <Form>
        <div className='d-flex gap-4'>
          <div className='d-flex flex-column gap-1'>
            {intialCheckboxValue.slice(0, 7).map((checkbox) => (
            <CheckBox 
              key={checkbox.label}
              label={checkbox.label}
              value={checkbox.value}
              checked={checkbox.checked}
              onChange={""} />
            ))}
          </div>
          <div className='d-flex flex-column gap-1'>
          {intialCheckboxValue.slice(7).map((checkbox) => (
            <CheckBox 
              key={checkbox.label}
              label={checkbox.label}
              value={checkbox.value}
              checked={checkbox.checked}
              onChange={""} />
            ))}
          </div>
        </div>
      </Form>
    </div>
    </>
  )
}

export default TopikKeahlian