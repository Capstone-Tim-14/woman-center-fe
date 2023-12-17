import React, { useState, useEffect } from 'react';
import Tabel from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import ModalHapusData from '../Molekul/Modal/modalHapusDataPaket';
import SearchPaket from '../Atom/inputan/searchPaket';
import TambahPaket from '../Molekul/Modal/tambahpaket';
import EditPaket from '../Molekul/Modal/EditPaket';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios';
import DeleteButton from '../Atom/DeleteButton';

function TabelPaket() {
  const { token, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [paket, setPaket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const getTabelPaket = async () => {
    try {
     
      const response = await axios.get('https://api-ferminacare.tech/api/v1/admin/counseling-packages', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPaket(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clicked = (id) => {
    
    axios.delete(`https://api-ferminacare.tech/api/v1/admin/counseling-packages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      getTabelPaket();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleDateRange = (selectedDateRange) => {
    setDateRange(selectedDateRange);
    setCurrentPage(1);
  };

  const handleItemsPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (e) => {
    setCurrentPage(parseInt(e.target.value, 10));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  

  const filteredData = Array.isArray(paket) ? paket.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    getTabelPaket();
  }, []);
  return (
    <div className='d-flex flex-column gap-2' style={{ width: '550px' }}>
    <div className='d-flex justify-content-between align-items-center'>
      {/* ... (other UI elements) */}
    </div>
    <table responsive id='tabelpaket'>
      <thead style={{ borderTop: '1px solid #E5E5E5' }}>
        <tr style={{ fontSize: '14px' }}>
          <th>Nama Paket</th>
          <th>Harga</th>
          <th>Tipe Paket</th>
          <th>Jumlah Sesi</th>
          <th className='text-center'>Aksi</th>
        </tr>
      </thead>
      <tbody style={{ borderBottom: '1px solid #E5E5E5' }}>
        {visibleData.map((item) => (
          <tr key={item.id} style={{ fontSize: '14px' }}>
            <td>{item.title}</td>
            <td>Rp{item.price}</td>
            <td>{/* You may need to update this column based on your data */}</td>
            <td>{item.session_per_week}</td>
            <td className='d-flex justify-content-center align-items-center gap-2'>
            <DeleteButton/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

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
  );
}

export default TabelPaket;
