import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/tabelKonselor.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchKonselor from "../components/Atom/inputan/searchKonselor";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconCalendar from "../components/Atom/iconCalendar";
import IconEdit from "../components/Atom/iconEdit";
import IconDelete from "../components/Atom/iconDelete";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoPeople } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import ModalTambahAkunKonselor from "../components/Molekul/Modal/modalTambahAkunKonselor";

const TabelKonselor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [newKonselorData, setNewKonselorData] = useState({
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

  const handleAddKonselor = async () => {
    try {
      console.log('Data to be sent to API:', newKonselorData);

      const response = await axios.post('https://api-ferminacare.tech/api/v1/users/register', newKonselorData);

      console.log('API Response:', response.data); // Log the API response
  
      if (response.status === 201) {
        console.log('Konselor berhasil ditambahkan');
        setNewKonselorData({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
        });
        // Tutup modal atau lakukan yang sesuai
      } else {
        // Tangani kesalahan jika diperlukan
        console.error('Gagal menambahkan konselor');
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
    <div className="main-database">

<div className="content">
      <div className="header">
      <div className="header-content">
        <h3>Database</h3>
        <div className="subtitle">
          <div className="icon-home">
            <img className="icon-home-img" src="public/asset/Home.svg" alt="Home Icon" />
          </div>
          <div className="subtitle-text">/ Konselor</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon">
          <div className="div-icon-inner">
            <img className="div-icon-bar" src="public/asset/Notification.svg" alt="Notification Icon" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src="public/asset/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>

        <div className="logo">
        <div><Link to="/tabel-konselor"><AiFillHome /> / Konselor</Link></div><br/>
          <table className="custom-table">
            <thead>
              <tr>
                <th></th>
                <th><GoPeople style={{ marginRight: '8px' }} />User</th>
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
          <div className="d-flex justify-content-end mb-3">
          <ModalTambahAkunKonselor 
            onAddKonselor={handleAddKonselor}
            newKonselorData={newKonselorData}
            setNewKonselorData={setNewKonselorData}
          />
          </div>
          <div className="mb-3 ">
            <Row>
              <Col>
                <h5>Konselor</h5>
              </Col>
              <Col className="d-flex justify-content-end">
                <SearchKonselor />
                <IconCalendar />
              </Col>
            </Row>
          </div>
          <Table hover borderless>
            <thead className="table-header">
              <tr>
                <th>ID User</th>
                <th>Username</th>
                <th>Alamat Email</th>
                <th>Tipe User</th>
                <th>Jadwal</th>
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
                <a href="/jadwal"><Button className="custom-button" >Jadwal</Button></a>
                </td>
                <td>
                  <div className="d-flex">
                    <IconEdit />
                    <IconDelete />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td><a href="/jadwal"><Button className="custom-button" >Jadwal</Button></a></td>
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
                <td><a href="/jadwal"><Button className="custom-button" >Jadwal</Button></a></td>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelKonselor;
