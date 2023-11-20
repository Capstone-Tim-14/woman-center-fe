import React, { useState, useEffect } from 'react';

import { TiChevronRight } from "react-icons/ti";
import { TbHomeHeart } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { GrArticle }  from "react-icons/gr";
import { BsChatText }  from "react-icons/bs";
import { BsFillMenuButtonWideFill }  from "react-icons/bs";
import { AiFillHome }  from "react-icons/ai";
import { IoNotifications }  from "react-icons/io5";
import { BsChevronDown }  from "react-icons/bs";
import { IoSettingsOutline }  from "react-icons/io5";



function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Tutup dropdown Database jika membuka dropdown icon
    setIsDatabaseOpen(false);
  };

  const toggleDatabase = () => {
    setIsDatabaseOpen(!isDatabaseOpen);
    // Tutup dropdown icon jika membuka dropdown Database
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Cek jika ada nilai di localStorage
    const storedIsMenuOpen = localStorage.getItem('isMenuOpen');

    if (storedIsMenuOpen === 'true') {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    // Simpan nilai isMenuOpen ke localStorage saat berubah
    localStorage.setItem('isMenuOpen', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    // Tutup dropdown Database saat komponen dimount
    setIsDatabaseOpen(false);

    // Cleanup function to avoid setting state on an unmounted component
    return () => {
      setIsDatabaseOpen(false);
    };
  }, []);

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
        <div className={isMenuOpen ? "dropdown-menu" : "hidden"}>
          <div><br/>
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
            <a href="#">< IoSettingsOutline style={{ marginRight: '8px' }}/>Settings</a>
          </div><br/>
          <div className='menu-icon'>
          <a href="#"><img src="/src/assets/icon/profile1.png" alt="Admin" style={{ marginRight: '8px', width: '24px', height: '24px' }} />Admin</a>
          </div>
        </div>
      </div>

{/* Navbar User section */}
      <div className="content">
        <div className='line'>
        <p>User</p>
        <IoNotifications className="notification-icon" />
        <a href="#"><img src="/src/assets/icon/profile1.png" className='admin-icon'alt="Admin" style={{ marginRight: '8px', width: '24px', height: '24px' }} /></a>
        </div><p/>

{/* Dashboard Summary Card */}
        <div className='logo'>
          <div><a href="#"><AiFillHome /> / User</a></div><br/>
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
      </div>
    </div>
  );
}

export default Sidebar;