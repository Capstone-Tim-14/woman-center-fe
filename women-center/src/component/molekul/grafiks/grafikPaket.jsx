import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function GrafikPaket() {
  const [data, setData] = useState([])
  
  return (
    <>
    <div className='container-lg'>
      <div className='row'>
        <div className='donut'>
          <Chart 
            options={''} 
            series={''} 
            type='donut' 
            width={380} />
        </div>
      </div>
    </div>
    </>
  )
}

export default GrafikPaket