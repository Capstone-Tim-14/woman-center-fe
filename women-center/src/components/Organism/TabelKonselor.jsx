import React, { useState } from 'react';
import DeleteButton from '../Atom/DeleteButton';
import { useNavigate } from 'react-router-dom';
import { BiSortAlt2 } from "react-icons/bi";
import { Button } from 'react-bootstrap';
import '../../styles/TabelDatabase.css';
import ModalJadwal from '../Molekul/modal/modalJadwal';
import ModalDataKonselor from '../Molekul/modal/modalDataKonselor';
const TabelKonselor = () => {
  const navigate = useNavigate();

  // State untuk menyimpan data tabel
  const [tableData, setTableData] = useState([
    {
      id: 1,
      title: "001",
      username: "Mariadi di fotokopi",
      namaDepan: "mar",
      namaBelakang: "yanto",
      alamatEmail: "w@gmailcom",
      jadwal: "",

    },
    {
      id: 2,
      title: "002",
      username: "Mariadi di fotokopi",
      namaDepan: "ri",
      namaBelakang: "yanti",
      alamatEmail: "su@gmailcom",
      status: "Approved",
      jadwal: "",

    },
    {
      id: 3,
      title: "003",
      username: "Mariadi di fotokopi",
      namaDepan: "adi",
      namaBelakang: "yantu",
      alamatEmail: "wja@gmailcom",
      status: "Rejected",
      jadwal: "",
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
            <th onClick={() => sortTable('status')}>
              Jadwal <BiSortAlt2 />
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
              <td><ModalJadwal /></td>
              <td className="d-flex justify-content-center">
                <ModalDataKonselor />
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

export default TabelKonselor;