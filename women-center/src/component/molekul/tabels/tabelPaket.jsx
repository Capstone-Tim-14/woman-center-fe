import React, { useState, useEffect } from 'react';
import Tabel from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import ModalHapusData from '../modal/modalHapusDataPaket';
import SearchPaket from '../../atom/inputan/searchPaket';
import TambahPaket from '../modal/tambahpaket';
import EditPaket from '../modal/EditPaket';
import axios from 'axios';

function TabelPaket() {
  const [searchTerm, setSearchTerm] = useState('');
  const [paket, setPaket] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const getTabelPaket = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Paket');
      setPaket(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clicked = (id) => {
       axios.delete(`http://localhost:3000/Paket/${id}`)
      .then(() => {
        getTabelPaket();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paket.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleItemsPerPage = (e) => setItemsPerPage(parseInt(e.target.value, 10));

  useEffect(() => {
    getTabelPaket();
  }, []);

  // Searching Data
  const filterPaket = currentItems.filter((item) =>
    item.namapaket.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='d-flex flex-column gap-2' style={{ width: '576px' }}>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0' style={{ fontWeight: '500' }}>Paket</p>
        <div className='d-flex align-items-center gap-2'>
          <SearchPaket value={searchTerm} onchange={handleSearch} />
          <TambahPaket />
        </div>
      </div>

      <Tabel responsive id='tabelpaket'>
        <thead style={{ borderTop: '1px solid #E5E5E5'}}>
          <tr style={{ fontSize: '14px' }}>
            <th>Nama Paket</th>
            <th>Harga</th>
            <th>Tipe Paket</th>
            <th>Jumlah Sesi</th>
            <th className='text-center'>Aksi</th>
          </tr>
        </thead>
        <tbody style={{ borderBottom: '1px solid #E5E5E5' }}>
          {filterPaket.map((item) => (
            <tr key={item.id} style={{ fontSize: '14px' }}>
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
          {[...Array(Math.ceil(paket.length / itemsPerPage))].map((_, index) => (
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
  );
}

export default TabelPaket;
