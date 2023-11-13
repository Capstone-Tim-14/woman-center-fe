import React, { useState, useEffect } from 'react';
import "./tabelKonselor.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchKonselor from "../atom/SearchKonselor";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconCalendar from "../atom/iconCalendar";
import IconExport from "../atom/iconExport";
import IconEdit from "../atom/iconEdit";
import IconDelete from "../atom/iconDelete";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './sidebar.css';
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
import ModalTambahAkun from '../molekul/modalTambahAkun';

const TabelKonselor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDatabaseOpen(false);
  };

  const toggleDatabase = () => {
    setIsDatabaseOpen(!isDatabaseOpen);
    setIsMenuOpen(false);
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
    <div className="main-layout">
      <div className={`sidebar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="brand">
          <div className="center-info">
            <p className="center-name" onClick={toggleMenu}>
              Women Center <BsFillMenuButtonWideFill />
            </p>
          </div>
          <p className="dashboard-version">Dashboard Version</p>
        </div>

        {/* Sidebar Section */}
        <div className={isMenuOpen ? "dropdown-menu" : "hidden"}>
          <div><br />
            <a className="menu-icon" href="#"><TbHomeHeart /> Dashboard </a><br/><br/>
            <a href="#" className='menu-icon' onClick={toggleDatabase}>
              <GoPeople style={{ marginRight: '8px' }} /> Database <TiChevronRight /><br/>
              <span className={`menu-icon ${isMenuOpen ? 'close' : ''}`}></span>
            </a>
            <div className={isDatabaseOpen ? "dropdown-menu" : "hidden"}>
              <div><a href="#">User</a></div><br/>
              <div><a href="#">Konselor</a></div><br/>
            </div>
          </div>
          
          <div className='menu-icon'>
            <a href="#"><TbChecklist style={{ marginRight: '8px' }}/>Jadwal dan Paket</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="#"><GrArticle style={{ marginRight: '8px' }} />Artikel</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="#"><BsChatText style={{ marginRight: '8px' }} />Chat</a>
          </div><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className='admin-navbar'>
            <a href="#"><IoSettingsOutline style={{ marginRight: '8px' }}/>Settings</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="#"><img src="/src/assets/img/profile1.png" alt="Admin" style={{ marginRight: '8px', width: '24px', height: '24px' }} />Admin</a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="line">
          <p>Konselor</p>
          <IoNotifications className="notification-icon" />
          <a href="#"><img src="/src/assets/img/profile1.png" className='admin-icon' alt="Admin" style={{ marginRight: '8px', width: '24px', height: '24px' }} /></a>
        </div><p/>

        <div className="logo">
          <div><a href="#"><AiFillHome /> / Konselor</a></div><br/>
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
                <th>Harian <BsChevronDown /></th>
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
            <ModalTambahAkun 
              label="Buat Akun Konselor"
              title="Tambah Konselor" />
          </div>
          <div className="mb-3 ">
            <Row>
              <Col>
                <h5>Konselor</h5>
              </Col>
              <Col className="d-flex justify-content-end">
                <SearchKonselor />
                <IconCalendar />
                <IconExport />
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
                  <Button className="custom-button" >Jadwal</Button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelKonselor;
