import React, { useState } from 'react';
import Karir from './Karir';
import DeleteConfirmation from './atom/DeleteConfirmation';
import DeleteButton from './atom/DeleteButton';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import './TableKarir.css';


const TabelKarir = () => {
  const navigate = useNavigate();

  const [selectedRow, setSelectedRow] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  // State untuk menyimpan data tabel
  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: "Article Title 1",
      contributor: "Karir 1",
      engagement: "",
      userType: "Nama Perusahaan",
      uploadDate: "2023-01-01",
      status: "Review",
      viewStatus: true, // Default view status is true
      commentStatus: true, // Default comment status is true
      saveStatus: true, // Default save status is true
    },
    {
      id: 2,
      title: "Article Title 2",
      contributor: "Karir 2",
      engagement: "",
      userType: "Nama Perusahaan",
      uploadDate: "2023-01-02",
      status: "Approved",
      viewStatus: true, // Default view status is false
      commentStatus: true, // Default comment status is false
      saveStatus: true, // Default save status is false
    },
    {
      id: 3,
      title: "Article Title 3",
      contributor: "Karir 3",
      engagement: "",
      userType: "Nama Perusahaan",
      uploadDate: "2023-01-03",
      status: "Rejected",
      viewStatus: true, // Default view status is true
      commentStatus: true, // Default comment status is true
      saveStatus: true, // Default save status is true
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


  const confirmDelete = () => {
    // Tambahkan logika konfirmasi atau hapus di sini
    console.log('Delete button clicked');
  };

  return (
   <div className= "body-container">
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortTable('title')}>
              ID Karir <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('contributor')}>
              Karir <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('engagement')}>
              Nama Perusahaan <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('uploadDate')}>
              Tanggal Ditambahkan <BiSortAlt2 />
            </th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} onClick={() => handleRowClick(row)}>
              <td><input type="checkbox" /></td>
              <td>{row.id}</td>
              <td>{row.contributor}</td>
              <td>{row.userType}</td>
              <td>{row.uploadDate}</td>
              <div style={{ display: "flex" }}>
                    <MdEditSquare style={{innerWidth:"23px", color: "#F4518D", marginTop: "10px", marginLeft: "50px"}} onClick={() => handleEdit(row)} />
                    <DeleteButton style={{marginLeft:"60px", padding:"10px"}} onClick={confirmDelete} />
                  </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    {selectedRow && (
        <Karir
          show={showReviewModal}
          handleClose={handleCloseReviewModal}
        />
    )}
  </div>

  );
};

export default TabelKarir;
