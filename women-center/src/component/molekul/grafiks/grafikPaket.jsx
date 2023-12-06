import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios'

function GrafikPaket() {
  const [dataPaket, setDataPaket] = useState({
    series: [20, 10, 30, 40],
    options: {
      colors: ['#FD8BA3', '#FFCC91','#97A5EB', '#6F6F6F'],
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: [ 'Paket A', 'Paket B', 'Paket C', 'Paket D'],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    },
  })

  // mengambil Data dari Database
  const getGrafik = async () => {
    try {
      const response = await axios.get('http://localhost:3000/series');
      const apiData = response.data;
      console.log(apiData);
      setDataPaket({
          series: apiData.map((item) => item.data),
          options: {
            ...dataPaket.options,
            labels: apiData.map((item) => item.name),
          },
        });
    }catch (error) {
      console.log(error);
    }
  }
    
  // menjalankan getGrafik
  useEffect(() => {
    getGrafik();
  },[])

  return (
    <>
      <div className='d-flex flex-column'>
        <p className='m-0 ps-4' style={{fontWeight: '500'}}>Paket Teratas</p>
        <div className='d-flex'>
          <Chart 
            options={dataPaket.options} 
            series={dataPaket.series} 
            type='donut' 
            width={380} />
        </div>
      </div>
    </>
  )
}

export default GrafikPaket