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
  const [filterText, setFilterText] = useState('');
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 1,
    nextPage: null,
    prevPage: null,
  });
  
  const fetchData = async (page = 1, filter = '') => {
    try {
      if (token) {
        const response = await axios.get(
          'https://api-ferminacare.tech/api/v1/admin/articles',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page,
              filter,
            },
          }
        );
  
        const data = response.data;
        
        setTableData(data.data);
  
        setPagination({
          page: data.meta.page,
          totalPage: data.meta.total_page,
          nextPage: data.meta.next_page,
          prevPage: data.meta.previous_page,
        });
  
      } else {
        console.error('Token not available.');
    
        logout();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    console.log('Stored Token:', localStorage.getItem('token'));
    fetchData(1, filterText); 
  }, [token, logout, filterText]);
  
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  
 
  const sortTable = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  
   
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
   //
    console.log('Row clicked:', articleId);
  };

  const handleCheckboxClick = (event, articleId) => {
  
    event.stopPropagation();
    
    console.log('Checkbox clicked:', articleId);
  };
  
  const confirmDelete = (articleId) => {
    
    deleteItem(articleId);
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
  
      console.log('Server Response:', response); 
  
      if (response.status === 200) {
        setTableData((prevData) => prevData.filter((item) => item.id !== itemId));
        console.log('article deleted:', itemId);
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
  <tr key={row.slug} onClick={() => handleRowClick(row.id)}>
    <td><input type="checkbox" onClick={(event) => handleCheckboxClick(event, row.id)} /></td>
              <td>{row.title}</td>
              <td>{row.author.name}</td>
              <td>
                {row.viewStatus ? <IoEyeOutline /> : null}
                {row.viewStatus && <span>10</span>}
                {row.commentStatus ? <FaRegComment /> : null}
                {row.commentStatus && <span>5</span>}
                {row.saveStatus ? <BsBookmark /> : null}
                {row.saveStatus && <span>3</span>} 
              </td>
              <td>{row.author.role}</td>
              <td>{row.published_at}</td>
              <div className={`status status-${row.status.toLowerCase()}`}>
                  {row.status === 'REVIEW' && 'Review'}
                  {row.status === 'PUBLISHED' && 'Approved'}
                  {row.status === 'REJECTED' && 'Rejected'}
                  
              </div>
              <td>
              <DeleteButton onConfirmDelete={() => confirmDelete(row.id)} />
                
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