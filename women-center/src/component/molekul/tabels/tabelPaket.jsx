import React from 'react'
import Tabel from 'react-bootstrap/Table'
import ModalHapusData from '../modal/modalHapusDataPaket'
import SearchPaket from '../../atom/inputan/searchPaket'
import TambahPaket from '../modal/tambahpaket'
import EditPaket from '../modal/EditPaket'


function TabelPaket() {
  
  return (
    <div 
      className='d-flex flex-column gap-2'
      style={{width: '550px'}}>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0'>Paket</p>
        <div className='d-flex align-items-center gap-2'>
          <SearchPaket />
          <TambahPaket />
        </div>
      </div>

      <Tabel responsive>
          <thead>
            <tr 
              style={{fontSize: '14px'}}>
              <th>Nama Paket</th>
              <th>Harga</th>
              <th>Tipe Paket</th>
              <th>Jumlah Sesi</th>
              <th className='text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{fontSize:'14px'}}>
              <td>Paket Voice Call</td>
              <td>IDR 250.000</td>
              <td>Voice call</td>
              <td>1 Sesi</td>
              <td className='d-flex justify-content-center align-items-center gap-2'>
                <EditPaket />
                <ModalHapusData />
              </td>
            </tr>
          </tbody>
      </Tabel>
    </div>
  )
}

export default TabelPaket