import React, { useState, useEffect } from 'react';
import { BiSortAlt2 } from "react-icons/bi";
import ModalTambahAkunKonselor from '../Modal/modalTambahAkunKonselor';
import ModalEditDataKonselor from '../modal/ModalEditDataKonselor';
import ModalHapus from '../Modal/ModalHapusDataKonselor';
import SearchDataKonselor from '../../Atom/inputan/SearchDataKonselor';
import ModalJadwalKonselor from '../Modal/ModalJadwalDataKonselor';
import axios from 'axios';
import '../../../styles/TabelDataKonselor.css';

const TabelDataKonselor = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  
  // get data
  const getDataKonselor = async () => {
    try{
      const response = await axios.get('http://localhost:3000/konselor');
      const dataTabel = response.data;
      setTableData(dataTabel);
      console.log(dataTabel);
    }catch(err){
      console.log(err);
    }
  }

  // delete data
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/konselor/${id}`)
    .then(() => {
      getDataKonselor();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getDataKonselor();
  },[])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Sorting Tabel
  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    // Lakukan pengurutan data
    const sortedData = [...tableData].sort((a, b) => {
      if (key === 'id') {
        return direction === 'ascending' ? a[key] - b[key] : b[key] - a[key];
      } else {
        return direction === 'ascending' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
      }
    });

    setTableData(sortedData);
  };

  const handleItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (e) => {
    setCurrentPage(parseInt(e.target.value, 10));
  };

  // filter searching dan pagination
  const filteredData = tableData.filter((row) => row.username.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);

  return (
    <div id='container-tabel'>
      <div id='modal-tambahKonselor' className='d-flex flex-column gap-3'>
        <div className='d-flex justify-content-end'>
          <ModalTambahAkunKonselor />
        </div>
        <div className='d-flex justify-content-between' id='header-tableKonselor'>
          <p className="m-0 fw-semibold fs-5">Konselor</p>
            <SearchDataKonselor
              value={searchTerm} 
              onChange={handleSearch}/>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table" id='table-konselor'>
          <thead>
            <tr>
              <th><input type="cehckbox" style={{display: 'none'}}/></th>
              <th onClick={() => sortTable('id')}>
                ID User <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('username')}>
                Username <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('first_name')}>
                Nama Depan <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('last_name')}>
                Nama Belakang <BiSortAlt2 />
              </th>
              <th onClick={() => sortTable('email')}>
                Alamat Email <BiSortAlt2 />
              </th>
              <th>
                Jadwal
              </th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row) => (
              <tr key={row.id}>
                <td><input type="checkbox" /></td>
                <td>us-{String(row.id).padStart(4, '0')}</td>
                <td>{row.username}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td><ModalJadwalKonselor jadwal={row}/></td>
                <td className="d-flex justify-content-center gap-2">
                  <ModalEditDataKonselor data={row}/>
                  <ModalHapus onClick={() => handleDelete(row.id)} icons='src/assets/icons/Delete.png'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div id='pagination-container' className='d-flex justify-content-between'>

          <div id='show-itemsKonselor'>
            <span>Show </span>
            <select onChange={handleItemsPerPage} value={itemsPerPage}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
            <span> items per page</span>
          </div>
          
          <div id='pagination-dropdownKonselor'>
            <span>Page: </span>
            <select onChange={handlePageChange} value={currentPage}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <span> of {totalPages}</span>
          </div>

        </div>

      </div>
    </div>
  );
}; 

export default TabelDataKonselor;