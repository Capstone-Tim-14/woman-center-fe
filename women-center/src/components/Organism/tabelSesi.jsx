import React,{useEffect, useState} from 'react'
import Tabel from 'react-bootstrap/Table'
import Invoice from '../Molekul/Modal/invoice'
import Pagination from 'react-bootstrap/Pagination';
import ModalHapusData from '../Molekul/Modal/modalHapusDataPaket'
import Search from '../Atom/inputan/searchPaket'
import ButtonsSort from '../Atom/button/buttonsSort'
import EditKonseling from '../Molekul/Modal/EditKonselingPaket'
import FilterKalender from '../Molekul/Modal/filterKalenderPaket';
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
  const [dateRange, setDateRange] = useState(null)
  // Get Data From Database
  const getTabelSesi = async () => {
    await axios.get('http://localhost:3000/Sesi')
    .then((response) => {
      setSesi(response.data)
      // console.log(response.data)
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

  const handleDateRange = (selectedDateRange) => {
    setDateRange(selectedDateRange);
    setCurrentPage(1);
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

// filter by date
  const filteredByDateRange =
    dateRange && dateRange[0] && dateRange[1]
      ? filterSesi.filter(
          (item) =>
            new Date(item.tglDibuat) >= new Date(dateRange[0]) &&
            new Date(item.tglDibuat) <= new Date(dateRange[1])
        )
      : filterSesi;

  // Trigger Data 
  useEffect(() => {
    getTabelSesi()
  },[])

  return (
    <div 
      className='d-flex flex-column gap-2'
      style={{width: '1000px' }}>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0' style={{ fontWeight: '500' }}>Sesi</p>
        <div className='d-flex align-items-center gap-2'>
          <Search
            value={searchTerm}
            onchange={handleSearch}/>
          <FilterKalender onfilterApply={handleDateRange}/>
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
              <th className='text-center'>
                Tanggal Dibuat
                <ButtonsSort onClick={() => sorting('tglDibuat')}/></th>
              <th className='text-center'>
                Tanggal Pertemuan
                <ButtonsSort onClick={() => sorting('tglPertemuan')}/></th>
              <th>
                Status
                <ButtonsSort onClick={() => sorting('status')}/></th>
              <th className='text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody style={{borderBottom: '1px solid #E5E5E5'}}>
            {filteredByDateRange.map ((item) => (
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
                <td className='text-center'>{item.tglDibuat}</td>
                <td className='text-center'>{item.tglPertemuan}</td>
                <td>
                  <div className={`status status-${item.status.toLowerCase()} rounded-3`}>
                    {item.status === 'Today' && 'Today'}
                    {item.status === 'Completed' && 'Completed'}
                    {item.status === 'Upcoming' && 'Upcoming'}
                  </div>
                </td>
                <td className='d-flex justify-content-center align-items-center gap-1'>
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