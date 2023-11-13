import React from 'react';

const TableSection = () => (
  <div className="table-container">
    <table className="data-table">
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
          <td><div className="status status-review">Need to Review</div></td>
          <td>
            <button className="delete-button" onClick={() => confirmDelete()}>
              <img src="public/asset/sampah.png" alt="Delete Icon" />
            </button>
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default TableSection;