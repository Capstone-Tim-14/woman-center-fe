import React, { useState } from 'react'
import CheckboxDataKonselor from '../../Atom/checkbox/CheckboxDataKonselor'
import { Form } from 'react-bootstrap'

function TopikKeahlian({onSelectedTopicsChange}) {

  const intialCheckboxValue = [
    {id: 1, label: 'Trauma', value: 'trauma'},
    {id: 2, label: 'Depresi', value: 'Depresi' },
    {id: 3, label: 'Keluarga', value: 'Keluarga' },
    {id: 4, label: 'Hubungan', value: 'Hubungan' },
    {id: 5, label: 'Karir', value: 'Karir' },
    {id: 6, label: 'Phobia', value: 'Phobia' },
    {id: 7, label: 'Pernikahan', value: 'Pernikahan' },
    {id: 8, label: 'Kekerasan', value: 'Kekerasan' },
    {id: 9, label: 'Anak & Remaja', value: 'Anak & Remaja' },
    {id: 10, label: 'Gangguan Kepribadian', value: 'Gangguan Kepribadian' },
    {id: 11, label: 'Perilaku', value: 'Perilaku' },
    {id: 12, label: 'Konflik', value: 'Konflik' },
    {id: 13, label: 'Perkembangan Diri', value: 'Perkembangan Diri' },
    {id: 14, label: 'Kecemasan', value: 'Kecemasan' },
  ]


  const [checkboxValues, setCheckboxValues] = useState(
    intialCheckboxValue.reduce((acc, checkbox) => {
      acc[checkbox.id] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: !prevValues[id],
    }));

  const selectedTopics = intialCheckboxValue
  .filter((checkbox) => checkboxValues[checkbox.id])
  .map((checkbox) => checkbox.value);

  onSelectedTopicsChange(selectedTopics);

  };

  return (
    <>
    <div className='d-flex flex-column gap-3' id='topikKeahlian'>
      <p className='m-0'>Topik Keahlian</p>
      <Form id='form-topikKeahlian'>
        <div className='d-flex gap-4'>
          <div className='d-flex flex-column gap-1'>
            {intialCheckboxValue.slice(0, 7).map((checkbox) => (
            <CheckboxDataKonselor 
              key={checkbox.id}
              label={checkbox.label}
              value={checkboxValues[checkbox.id]}
              checked={checkboxValues[checkbox.id]}
              onChange={() => handleCheckboxChange(checkbox.id)}/>
            ))}
          </div>
          <div className='d-flex flex-column gap-1'>
          {intialCheckboxValue.slice(7).map((checkbox) => (
            <CheckboxDataKonselor 
              key={checkbox.id}
              label={checkbox.label}
              value={checkboxValues[checkbox.id]}
              checked={checkboxValues[checkbox.id]}
              onChange={() => handleCheckboxChange(checkbox.id)}/>
            ))}
          </div>
        </div>
      </Form>
    </div>
    </>
  )
}

export default TopikKeahlian