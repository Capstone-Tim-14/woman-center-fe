import React from 'react'
import '../../styles/bannerKonselor.css'

function BannerKonselor({icon, text}) {
  return (
    <div 
      className='d-flex gap-4 rounded-4 align-items-center' 
      id='banner'>
        <div 
          id='icons'
          className='rounded-3'>
          {icon}
        </div>
        <p className='m-0'>{text}</p>
    </div>
  )
}

export default BannerKonselor