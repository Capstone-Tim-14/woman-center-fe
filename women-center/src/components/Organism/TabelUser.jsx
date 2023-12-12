import React, { useState } from 'react';
import DeleteButton from "../Atom/DeleteButton";
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import '../../styles/TabelDatabase.css';
import ModalDataUser from '../Molekul/Modal/modalDataUser';
const TabelUser = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data tabel
  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: "001",
      username: "Bagus",
      namaDepan: "Bagus",
      namaBelakang: "Bagus",
      alamatEmail: "bagus1@gmailcom",
    },
    {
      id: 2,
      title: "002",
      username: "Bagus2",
      namaDepan: "Bagus",
      namaBelakang: "Bagus",
      alamatEmail: "bagus2@gmailcom",
    },
    {
      id: 3,
      title: "003",
      username: "Bagus3",
      namaDepan: "Bagus",
      namaBelakang: "Bagus",
      alamatEmail: "bagus3@gmailcom",
    },
    // Add more rows as needed
  ]);

  // State untuk menyimpan arah sort dan jenis kolom yang sedang di-sort
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });

  // Fungsi untuk mengurutkan tabel
  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    // Lakukan pengurutan data
    const sortedData = [...tableData].sort((a, b) => {
      if (direction === 'ascending') {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });

    setTableData(sortedData);
  };

  const handleRowClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  const confirmDelete = () => {
    // Tambahkan logika konfirmasi atau hapus di sini
    console.log('Delete button clicked');
  };

  return (
    <div className="table-container-database">
      <table className="data-table-database">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortTable('title')}>
              ID User <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('username')}>
              Username <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('namaDepan')}>
              Nama Depan <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('namaBelakang')}>
              Nama Belakang <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('alamatEmail')}>
              Alamat Email <BiSortAlt2 />
            </th>
            <th>Aksi</th>
          </tr>
        </thead>    
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td><input type="checkbox" /></td>
              <td>{row.title}</td>
              <td>{row.username}</td>
              <td>
                {row.namaDepan}
              </td>
              <td>{row.namaBelakang}</td>
              <td>{row.alamatEmail}</td>
              <td className='d-flex justify-content-center'>
                <ModalDataUser />
                <DeleteButton onClick={confirmDelete} />
                {/* You can add additional buttons/actions here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 

export default TabelUser;