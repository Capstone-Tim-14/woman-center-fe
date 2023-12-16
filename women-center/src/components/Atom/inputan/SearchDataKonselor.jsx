import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SearchDataKonselor({value, onChange}) {
  return (
    <div 
        id='searchDataKonselor'
        className="d-flex align-items-center py-1 px-3 border rounded-2">
        <FiSearch/>
        <input
            id='inputan-searchKonselor'
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            style={{border: 'none', outline: 'none', backgroundColor: 'white', width: '170px', fontSize: '14px'}} 
            className='px-3'/>
    </div>
  )
}

export default SearchDataKonselor