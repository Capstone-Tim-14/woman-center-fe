import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteButton from '../Atom/DeleteButton';
import { useNavigate } from 'react-router-dom';
import ArtikelModal from '../Organism/BacaArtikel';
import { IoEyeOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import '../../styles/TableSection.css';
import { useAuth } from '../Layout/AuthContext'
import PageOptions from './PageOption';

const TableSection = () => {
  const { token, logout } = useAuth();

  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 1,
    nextPage: null,
    prevPage: null,
  });
  
  const fetchData = async (page = 1) => {
    try {
      if (token) {
        const response = await axios.get(
          'https://api-ferminacare.tech/api/v1/admin/articles',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const data = response.data;
        // Handle the data as needed
        setTableData(data.data);
  
        setPagination({
          page: data.meta.page,
          totalPage: data.meta.total_page,
          nextPage: data.meta.next_page,
          prevPage: data.meta.previous_page,
        });
  
      } else {
        console.error('Token not available.');
        // You might want to redirect to the login page or handle unauthorized access
        logout();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    console.log('Stored Token:', localStorage.getItem('token'));
    fetchData();
  }, [token, logout]);
  
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
  
  const confirmDelete = (itemId) => {
    // Implement the logic to show a confirmation dialog or directly call deleteItem
    deleteItem(itemId);
  };
  
  const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://api-ferminacare.tech/api/v1/admin/articles/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        setTableData((prevData) => prevData.filter((item) => item.id !== itemId));
        console.log('Item deleted:', itemId);
      } else {
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
  const goToPage = (page) => {
    fetchData(page);
  };
  

  return (
    <div className="table-container-artikel">
      <table className="data-table-artikel">
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
            <tr key={row.slug} onClick={() => handleRowClick(row)}>
              <td><input type="checkbox" /></td>
              <td>{row.title}</td>
              <td>{row.author.name}</td>
              <td>
                {row.viewStatus ? <IoEyeOutline /> : null}
                {row.viewStatus && <span>10</span>} {/* Tambahkan jarak jika viewStatus aktif */}
                {row.commentStatus ? <FaRegComment /> : null}
                {row.commentStatus && <span>5</span>} {/* Tambahkan jarak jika commentStatus aktif */}
                {row.saveStatus ? <BsBookmark /> : null}
                {row.saveStatus && <span>3</span>} {/* Tambahkan jarak jika saveStatus aktif */}
              </td>
              <td>{row.author.role}</td>
              <td>{row.published_at}</td>
              <div className={`status status-${row.status.toLowerCase()}`}>
                  {row.status === 'REVIEW' && 'Review'}
                  {row.status === 'PUBLISHED' && 'Approved'}
                  {row.status === 'REJECTED' && 'Rejected'}
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
      <div>
      <PageOptions onPageChange={goToPage} totalPages={pagination.totalPage || 1} />
      </div>
    </div>
  );
};9

export default TableSection;