import React,{useEffect, useState} from 'react'
import Tabel from 'react-bootstrap/Table'
import Invoice from '../modal/invoice'
import Pagination from 'react-bootstrap/Pagination';
import ModalHapusData from '../modal/modalHapusDataPaket'
import SearchPaket from '../../atom/inputan/searchPaket'
import ButtonsSort from '../../atom/button/buttonsSort'
import EditKonseling from '../modal/EditKonselingPaket'
import FilterKalenderPaket from '../modal/filterKalenderPaket';
import axios from 'axios'

function TabelSesi() {

  const [searchTerm, setSearchTerm] = useState('')
  const [sesi, setSesi] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortedSesi, setSortedSesi] = useState({
    column: null,
    order: 'ASC'
  })

  // Get Data From Database
  const getTabelSesi = async () => {
    await axios.get('http://localhost:3000/Sesi')
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

   // Pagination
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = sesi.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleItemsPerPage = (e) => setItemsPerPage(parseInt(e.target.value, 10));

  // Searching Data
  const filterSesi = currentItems.filter((item) =>
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
      style={{width: '992px'}}>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0' style={{ fontWeight: '500' }}>Sesi</p>
        <div className='d-flex align-items-center gap-2'>
          <SearchPaket 
            value={searchTerm}
            onchange={handleSearch}/>
          <FilterKalenderPaket />
        </div>
      </div>

      <Tabel responsive id='tabelsesi'>
          <thead style={{ borderTop: '1px solid #E5E5E5'}}>
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
          <tbody style={{borderBottom: '1px solid #E5E5E5'}}>
            {filterSesi.map ((item) => (
              <tr 
                key={item.id}
                style={{fontSize:'14px', borde: 'none'}}>
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
                  <EditKonseling /> 
                  <ModalHapusData clicked={() => clicked(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
      </Tabel>

      {/* Pagination */}
      <div className='d-flex justify-content-between'>
        <div>
          <span>Show </span>
          <select onChange={handleItemsPerPage} value={itemsPerPage}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
          </select>
          <span> items per page</span>
        </div>
        <Pagination>
          {[...Array(Math.ceil(sesi.length / itemsPerPage))].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  )
}

export default TabelSesi