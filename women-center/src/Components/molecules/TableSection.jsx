import React, { useState } from 'react';
import DeleteButton from '../atoms/DeleteButton';
import { useNavigate } from 'react-router-dom';
import ArtikelModal from '../../component/organism/BacaArtikel';
import { IoEyeOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import './TableSection.css';

const TableSection = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data tabel
  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: "Article Title 1",
      contributor: "Contributor 1",
      engagement: "",
      userType: "User Type 1",
      uploadDate: "2023-01-01",
      status: "Review",
      viewStatus: true, // Default view status is true
      commentStatus: true, // Default comment status is true
      saveStatus: true, // Default save status is true
    },
    {
      id: 2,
      title: "Article Title 2",
      contributor: "Contributor 2",
      engagement: "",
      userType: "User Type 2",
      uploadDate: "2023-01-02",
      status: "Approved",
      viewStatus: true, // Default view status is false
      commentStatus: true, // Default comment status is false
      saveStatus: true, // Default save status is false
    },
    {
      id: 3,
      title: "Article Title 3",
      contributor: "Contributor 3",
      engagement: "",
      userType: "User Type 3",
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

  const handleRowClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  const confirmDelete = () => {
    // Tambahkan logika konfirmasi atau hapus di sini
    console.log('Delete button clicked');
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortTable('title')}>
              Judul Artikel <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('contributor')}>
              Kontributor <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('engagement')}>
              Engagement <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('userType')}>
              Tipe User <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('uploadDate')}>
              Tanggal Upload <BiSortAlt2 />
            </th>
            <th onClick={() => sortTable('status')}>
              Status <BiSortAlt2 />
            </th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td><input type="checkbox" /></td>
              <td>{row.title}</td>
              <td>{row.contributor}</td>
              <td>
                {row.viewStatus ? <IoEyeOutline /> : null}
                {row.viewStatus && <span>10</span>} {/* Tambahkan jarak jika viewStatus aktif */}
                {row.commentStatus ? <FaRegComment /> : null}
                {row.commentStatus && <span>5</span>} {/* Tambahkan jarak jika commentStatus aktif */}
                {row.saveStatus ? <BsBookmark /> : null}
                {row.saveStatus && <span>3</span>} {/* Tambahkan jarak jika saveStatus aktif */}
              </td>
              <td>{row.userType}</td>
              <td>{row.uploadDate}</td>
              <div className={`status status-${row.status.toLowerCase()}`}>
                  {row.status === 'Review' && 'Review'}
                  {row.status === 'Approved' && 'Approved'}
                  {row.status === 'Rejected' && 'Rejected'}
                  {/* Tambahkan kondisi untuk status lain jika diperlukan */}
              </div>
              <td>
                <DeleteButton onClick={confirmDelete} />
                {/* You can add additional buttons/actions here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};9

export default TableSection;
