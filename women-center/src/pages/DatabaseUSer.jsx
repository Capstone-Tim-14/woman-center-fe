import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Database.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Organism/HeaderDatabase";
import UserText from "../components/Atom/UserText";
import ModalTambahAkunUser from '../components/Molekul/Modal/modalTambahAkunUser.jsx';
import SearchBar from "../components/Atom/SearchBar.jsx";
import NewTabelUser from '../components/Organism/TabelUser.jsx';
import PageSelector from "../components/Organism/PageSelector"; 


const DatabaseUser = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDatabaseOpen(false);
  };

  const toggleDatabase = () => {
    setIsDatabaseOpen(!isDatabaseOpen);
    setIsMenuOpen(false);
  };

  const handleAddUser = async () => {
    try {
      console.log('Data to be sent to API:', newUserData);

      const response = await axios.post('https://api-ferminacare.tech/api/v1/users/register', newUserData);

      console.log('API Response:', response.data); // Log the API response

      if (response.status === 201) {
        console.log('User berhasil ditambahkan');
        setNewUserData({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
        });
        // Tutup modal atau lakukan yang sesuai
      } else {
        // Tangani kesalahan jika diperlukan
        console.error('Gagal menambahkan User');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const storedIsMenuOpen = localStorage.getItem('isMenuOpen');
    setIsMenuOpen(storedIsMenuOpen === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('isMenuOpen', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => () => setIsDatabaseOpen(false), []);

  return (
    <div className="main-layout-database"> 
      <Header />

        <div className="sub-summary-database">
          <table className="custom-table">
            <thead>
              <tr>
                <th></th>
                <th><img src="src/assets/icon/icon.svg" alt="User Icon" />User</th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                <th></th><th></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User Baru</td>
                <td></td><td></td>
                <td></td><td></td>
                <td>User Aktif</td>
                <td></td><td></td>
                <td></td><td></td>
                <td>Konseling</td>
                <td></td><td></td>
                <td></td><td></td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="mt-5 p-4">
          <div className="d-flex justify-content-end" >
          <ModalTambahAkunUser 
            onAddUser={handleAddUser}
            newUserData={newUserData}
            setNewUserData={setNewUserData}
            />
          </div>
          <div className="">
            <Row>
            <UserText />
              <Col className="d-flex justify-content">
                <SearchBar />
              </Col>
            </Row>
          </div>
          <NewTabelUser />
          <footer className="page-selector-footer">
          <PageSelector />
          </footer>
          {/* <Table hover borderless>
            <thead className="table-header">
              <tr>
                <th>ID User</th>
                <th>Username</th>
                <th>Alamat Email</th>
                <th>Tipe User</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className="d-flex">
                    <ModalDataUser />
                    <ModalHapus icons={<IconDelete className='text-danger'/>}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                  <div className="d-flex">
                    <IconEdit />
                    <IconDelete />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>
                  <div className="d-flex">
                    <IconEdit />
                    <IconDelete />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="mb-3 ">
            <Row>
              <Col>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" className="btn custom-btn-dropdown">10</button>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn custom-btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                      <p className="m-0 mx-2" style={{ color: '#A6A8B1' }}>items per page</p>
                      <p className="m-0">1-10 of 200 items</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-end">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" className="btn custom-btn-dropdown">1</button>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn custom-btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                    <div className="d-flex align-items-center">
                      <p className="m-0 mx-2">of 44 pages</p>
                      <IoIosArrowBack />
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div> */}
        </div>
      </div>

  );
};

export default DatabaseUser;
