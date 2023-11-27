import React, { useState, useEffect } from 'react';
import "../../styles/sidebar.css";
import Router from "../../routes/routers.jsx";
import { TiChevronRight } from "react-icons/ti";
import { TbHomeHeart } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { GrArticle }  from "react-icons/gr";
import { BsChatText }  from "react-icons/bs";
import { BsFillMenuButtonWideFill }  from "react-icons/bs";
import { IoSettingsOutline }  from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";


function layout() {
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
            <a className="menu-icon" href="/dashboard"><TbHomeHeart /> Dashboard </a><br/><br/>
            <a href="/database" className='menu-icon' onClick={toggleDatabase}>
              <GoPeople style={{ marginRight: '8px' }} /> Database <TiChevronRight /><br/>
              <span className={`menu-icon ${isMenuOpen ? 'close' : ''}`}></span>
            </a>
            <div className={isDatabaseOpen ? "dropdown-menu" : "hidden"}>
              <div><a href="/database/user">User</a></div><br/>
              <div><a href="/database/konselor">Konselor</a></div><br/>
            </div>
          </div>
          <div className='menu-icon'>
            <a href="/jadwal"><TbChecklist style={{ marginRight: '8px' }}/>Jadwal</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="/paket"><HiOutlineClipboardDocumentList style={{ marginRight: '8px' }}/>Paket</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="/karier"><MdOutlineWorkOutline style={{ marginRight: '8px' }}/>Karier</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="/artikel"><GrArticle style={{ marginRight: '8px' }} />Artikel</a>
          </div><br/>
          <div className='menu-icon'>
            <a href="/chat"><BsChatText style={{ marginRight: '8px' }} />Chat</a>
          </div><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className='admin-navbar'>
            <a href="/settings">< IoSettingsOutline style={{ marginRight: '8px' }}/>Settings</a>
          </div><br/>
          <div className='menu-icon'>
          <a href="/profile"><img src="public/asset/profile 1.jpg" style={{ marginRight: '8px', width: '24px', height: '24px' }} />Admin</a>
          </div><br/>
          <div className='logout'>
          <a href="/profile"><HiOutlineLogout  style={{ marginRight: '8px' }}/>Keluar</a>
          </div>
        </div>
      </div>
      
{/* Navbar User section */}
      <div className="content">
        </div>
        <Router />
      </div>
    
  );
}

export default layout;