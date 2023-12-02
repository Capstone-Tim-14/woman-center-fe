import React,{useEffect, useState} from 'react'
import Tabel from 'react-bootstrap/Table'
import Invoice from '../modal/invoice'
import ModalHapusData from '../modal/modalHapusDataPaket'
import SearchPaket from '../../atom/inputan/searchPaket'
import axios from 'axios'

function TabelSesi() {

  const [searchTerm, setSearchTerm] = useState('')
  const [sesi, setSesi] = useState([])

  // Get Data From Database
  const getTabelSesi = async () => {
    axios.get('http://localhost:3000/Sesi')
    .then((response) => {
      setSesi(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // Delete Data
  const clicked = (id) => {
    axios.delete(`http://localhost:3000/Sesi/${id}`)
    .then(() => {
      getTabelSesi()
    })
    .catch((error) => {
      console.log(error)
    })
  }


  // Searching Data
  const filterSesi = sesi.filter((item) =>
    item.user.toLowerCase().includes(searchTerm.toLowerCase()))
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    getTabelSesi()
  },[])

  return (
    <div 
      className='container-xl d-flex flex-column gap-2'
      style={{width: '1020px'}}>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0'>Sesi</p>
        <div className='d-flex align-items-center gap-2'>
          <SearchPaket 
            value={searchTerm}
            onchange={handleSearch}/>
          <ModalHapusData />
        </div>
      </div>

      <Tabel responsive>
          <thead>
            <tr 
              style={{fontSize: '14px'}}>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID Sesi</th>
              <th>User</th>
              <th>Konselor</th>
              <th>Paket</th>
              <th>Tanggal Dibuat</th>
              <th>Tanggal Pertemuan</th>
              <th>Status</th>
              <th className='text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filterSesi.map ((item,i) => (
              <tr 
                key={item.id}
                style={{fontSize:'14px'}}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{String(i + 1).padStart(4, '0')}</td>
                <td>{item.user}</td>
                <td>{item.konselor}</td>
                <td>{item.paket}</td>
                <td>{item.tglDibuat}</td>
                <td>{item.tglPertemuan}</td>
                <td>{item.status}</td>
                <td className='d-flex justify-content-center align-items-center gap-2'>
                  <Invoice />
                  <ModalHapusData />
                  <ModalHapusData clicked={() => clicked(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
      </Tabel>
    </div>
  )
}

export default TabelSesi