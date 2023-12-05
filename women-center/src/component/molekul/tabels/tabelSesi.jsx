import React,{useEffect, useState} from 'react'
import Tabel from 'react-bootstrap/Table'
import Invoice from '../modal/invoice'
import ModalHapusData from '../modal/modalHapusDataPaket'
import SearchPaket from '../../atom/inputan/searchPaket'
import ButtonsSort from '../../atom/button/buttonsSort'
import EditKonseling from '../modal/EditKonseling'
import axios from 'axios'

function TabelSesi() {

  const [searchTerm, setSearchTerm] = useState('')
  const [sesi, setSesi] = useState([])
  const [sortedSesi, setSortedSesi] = useState({
    column: null,
    order: 'ASC'
  })

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

  // Sorting Data
  const sorting = (column) => {
    let order = 'ASC'
    if (sortedSesi.column === column && sortedSesi.order === 'ASC') {
      order = 'DESC';
    }
    setSortedSesi({ column, order });

    const sortedData = [...sesi].sort((a, b) => {
      const valueA = a[column].toString().toLowerCase();
      const valueB = b[column].toString().toLowerCase();
  
      if (order === 'ASC') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
  })
    setSesi(sortedData)
  }

  // Searching Data
  const filterSesi = sesi.filter((item) =>
    item.user.toLowerCase().includes(searchTerm.toLowerCase()))
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Trigger Data 
  useEffect(() => {
    getTabelSesi()
  },[])

  return (
    <div 
      className='d-flex flex-column gap-2'
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
              <th id='checkboxSesi'>
                <input type="checkbox" />
              </th>
              <th>
                ID Sesi
                <ButtonsSort onClick={() => sorting('id')}/></th>
              <th>
                User
                <ButtonsSort onClick={() => sorting('user')}/></th>
              <th>
                Konselor
                <ButtonsSort onClick={() => sorting('konselor')}/></th>
              <th>
                Paket
                <ButtonsSort onClick={() => sorting('paket')}/></th>
              <th>
                Tanggal Dibuat
                <ButtonsSort onClick={() => sorting('tglDibuat')}/></th>
              <th>
                Tanggal Pertemuan
                <ButtonsSort onClick={() => sorting('tglPertemuan')}/></th>
              <th>
                Status
                <ButtonsSort onClick={() => sorting('status')}/></th>
              <th className='text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filterSesi.map ((item) => (
              <tr 
                key={item.id}
                style={{fontSize:'14px'}}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{String(item.id).padStart(4, '0')}</td>
                <td>{item.user}</td>
                <td>{item.konselor}</td>
                <td>{item.paket}</td>
                <td>{item.tglDibuat}</td>
                <td>{item.tglPertemuan}</td>
                <td>{item.status}</td>
                <td className='d-flex justify-content-between align-items-center'>
                  <Invoice />
                  {/* <EditKonseling />  */}
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