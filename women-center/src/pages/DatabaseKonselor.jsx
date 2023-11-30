import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/tabelKonselor.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "../styles/sidebar.css";
import { TiChevronRight } from "react-icons/ti";
import { TbHomeHeart } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { BsChatText } from "react-icons/bs";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import ModalTambahAkunKonselor from '../components/Molekul/Modal/modalTambahAkunKonselor.jsx';
import NewTabelKonselor from '../components/Organism/TabelKonselor.jsx';
import SearchBar from '../components/Molekul/searchBar.jsx';

const DatabaseKonselor = () => {
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
    <div className="main-layout-database">

      <div className="line">
          <p>User</p>
          <IoNotifications className="notification-icon" />
          <a href="#"><img src="/src/assets/img/profile1.png" className='admin-icon' alt="Admin" style={{ marginRight: '8px', width: '24px', height: '24px' }} /></a>
        </div><p/>

        <div className="logo-database">
        <div><Link to="/tabel-konselor"><AiFillHome /> / Konselor</Link></div><br/>
          <table className="custom-table-database">
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

        <div className="mt-5 p-4 ">
          <div className="d-flex justify-content-end-database">
          <ModalTambahAkunKonselor 
            onAddKonselor={handleAddKonselor}
            newKonselorData={newKonselorData}
            setNewKonselorData={setNewKonselorData}
          />
          </div>
          <div>
            <Row>
              <Col >
                <h5>Konselor</h5>
              </Col>
              <Col className="d-flex justify-content-end-database">
                <SearchBar />
              </Col>
            </Row>
          </div>
          <NewTabelKonselor />
          {/* <Table hover borderless>
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
                  <Button className="custom-button" >Jadwal</Button>
                </td>
                <td>
                  <div className="d-flex">
                    <ModalDataKonselor/>
                    <ModalHapus icons={<IconDelete className='text-danger'/>}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td><Button className="custom-button" >Jadwal</Button></td>
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
                <td><Button className="custom-button" >Jadwal</Button></td>
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

export default DatabaseKonselor;
