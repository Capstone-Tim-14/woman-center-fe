import React,{useState, useEffect} from 'react'
import Tabel from 'react-bootstrap/Table'
import ModalHapusData from '../modal/modalHapusDataPaket'
import SearchPaket from '../../atom/inputan/searchPaket'
import TambahPaket from '../modal/tambahpaket'
import EditPaket from '../modal/EditPaket'
import axios from 'axios'


function TabelPaket() {

  const [searchTerm, setSearchTerm] = useState('')
  const [paket, setPaket] = useState([])

  const getTabelPaket = async () => {
    await axios.get('http://localhost:3000/Paket')
    .then((response) => {
      setPaket(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const clicked = (id) => {
    axios.delete(`http://localhost:3000/Paket/${id}`)
    .then(() => {
      getTabelSesi()
    })
    .catch((error) => {
      console.log(error)
    })
  }

// Searching Data
  const filterPaket = paket.filter((item) =>
    item.namapaket.toLowerCase().includes(searchTerm.toLowerCase()))
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    getTabelPaket()
  },[])
  
  return (
    <div 
      className='d-flex flex-column gap-2'
      style={{width: '550px'}}>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0'>Paket</p>
        <div className='d-flex align-items-center gap-2'>
          <SearchPaket 
            value={searchTerm}
            onchange={handleSearch}/>
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
            {filterPaket.map((item) => (
            <tr
              key={item.id}
              style={{fontSize:'14px'}}>
              <td>{item.namapaket}</td>
              <td>IDR {item.price}</td>
              <td>{item.type}</td>
              <td>{item.sesi} Sesi</td>
              <td className='d-flex justify-content-center align-items-center gap-2'>
                <EditPaket />
                <ModalHapusData clicked={() => clicked(item.id)} />
              </td>
            </tr>
            ))}
          </tbody>
      </Tabel>

      {/* Pagnation table */}
      <div>
        
      </div>
    </div>
  )
}

export default TabelPaket