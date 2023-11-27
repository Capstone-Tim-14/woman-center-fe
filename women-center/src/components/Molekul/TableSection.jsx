import React from 'react';
import DeleteButton from '../Atom/DeleteButton'; // Pastikan telah diimpor


const TableSection = () => {
  const confirmDelete = () => {
    // Tambahkan logika konfirmasi atau hapus di sini
    console.log('Delete button clicked');
  };


  return (
    <div className="table-container-artikel">
      <table className="data-table-artikel">
        <thead>
          <tr>
            <th></th>
            <th>Judul Artikel <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Kontributor <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Engagement <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Tipe User <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Tanggal Upload <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Status <img src="public/asset/sort.png" alt="sort Icon" /></th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
  <tr>
    <td><input type="checkbox" /></td>
    <td>Article Title 1</td>
    <td>Contributor 1</td>
    <td>
      <img src="public/asset/Eye.png" alt="Eye Icon" />
      View
      <img src="public/asset/komentar.png" alt="Comment Icon" />
      Comment
      <img src="public/asset/Simpan.png" alt="Simpan Icon" />
      Save
    </td>
    <td>User Type 1</td>
    <td>2023-01-01</td>
    <td>
      <div className="status status-review">Need to Review</div>
    </td>
    <td>
      <DeleteButton onClick={confirmDelete} />
    </td>
  </tr>


  {/* Dummy Data - Approved */}
  <tr>
    <td><input type="checkbox" /></td>
    <td>Article Title 2</td>
    <td>Contributor 2</td>
    <td>
      <img src="public/asset/Eye.png" alt="Eye Icon" />
      View
      <img src="public/asset/komentar.png" alt="Comment Icon" />
      Comment
      <img src="public/asset/Simpan.png" alt="Simpan Icon" />
      Save
    </td>
    <td>User Type 2</td>
    <td>2023-01-02</td>
    <td>
      <div className="status status-approved">Approved</div>
    </td>
    <td>
      <DeleteButton onClick={confirmDelete} />
    </td>
  </tr>


  {/* Dummy Data - Rejected */}
  <tr>
    <td><input type="checkbox" /></td>
    <td>Article Title 3</td>
    <td>Contributor 3</td>
    <td>
      <img src="public/asset/Eye.png" alt="Eye Icon" />
      View
      <img src="public/asset/komentar.png" alt="Comment Icon" />
      Comment
      <img src="public/asset/Simpan.png" alt="Simpan Icon" />
      Save
    </td>
    <td>User Type 3</td>
    <td>2023-01-03</td>
    <td>
      <div className="status status-rejected">Rejected</div>
    </td>
    <td>
      <DeleteButton onClick={confirmDelete} />
    </td>
  </tr>
  {/* Add more rows as needed */}
</tbody>


      </table>
    </div>
  );
};


export default TableSection;