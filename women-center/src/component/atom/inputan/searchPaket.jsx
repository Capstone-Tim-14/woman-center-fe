import { CiSearch } from 'react-icons/ci';
import Form from 'react-bootstrap/Form';
import React from 'react';

function SearchPaket({value, onchange}) {
  return (
    <Form style={{ width: 200 }} id='form-search'>
        <div 
          id='input-search'
          style={{ position: 'relative' }} 
          className='d-flex align-items-center'>
            <CiSearch 
              size={18} 
              style={{ position: 'absolute', left: 10}} />
            <Form.Control 
              id='Form-input-search'
              type="text" 
              value={value}
              onChange={onchange}
              placeholder="Search"
              style={{ paddingLeft: 35, height: 30 , fontSize: 13}} />
        </div>
    </Form>
  )
}
export default SearchPaket