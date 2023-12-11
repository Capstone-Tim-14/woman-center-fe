import React, { useState, useEffect } from 'react';
import Karir from '../Molekul/Modal/modalEditKarir';
import DeleteConfirmation from '../Atom/DeleteConfirmation';
import DeleteButton from '../Atom/DeleteButton';
import { useNavigate } from 'react-router-dom';
import { BiSortAlt2 } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import '../../styles/TabelKarir.css';
import axios from 'axios';
import { useAuth } from '../Layout/AuthContext';


const TabelKarir = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [selectedRow, setSelectedRow] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showKarirModal, setShowKarirModal] = useState(false);
  const [selectedKarir, setSelectedKarir] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleCloseKarirModal = () => {
    setShowKarirModal(false);
  };

  const openKarirModal = (row) => {
    setSelectedKarir(row); // Set the selectedKarir state
    setShowKarirModal(true);
  };
  // State untuk menyimpan data tabel
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(
            'https://api-ferminacare.tech/api/v1/admin/career',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          
    console.log('API Response:', response.data);

   
    setTableData(response.data.data);

          if (response.status === 200) {
            setTableData(response.data.data);
          } else {
            console.error('Unexpected status code:', response.status);
          }
        } else {
          console.error('Token not available.');
          // You might want to redirect to the login page or handle unauthorized access
          logout();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token, logout]); 
  // State untuk menyimpan arah sort dan jenis kolom yang sedang di-sort
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  
  const handleDelete = async (id) => {
    try {
      
      const response = await axios.delete(`https://api-ferminacare.tech/api/v1/admin/career/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
  
      
      console.log('Item deleted:', response.data);
  
      
      setTableData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
    
      console.error('Error deleting item:', error);
    }
  };

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
   <div className= "body-container-karier">
    <div className="table-container-karier">
      <table className="data-table-karier">
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
              <td>{row.title_job}</td>
              <td>{row.company_name}</td>
              <td>{row.published_at}</td> 
              <div style={{ display: "flex" }}>
              <div
                style={{ innerWidth: "23px", color: "#F4518D", marginTop: "7px", marginLeft: "50px", cursor: "pointer" }}>
                  <Karir/>
                </div>
                  <DeleteButton 
                  style={{marginLeft:"60px", padding:"10px"}}
                  onClick={() => handleDelete(row.id)}
                  />
                </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default TabelKarir;