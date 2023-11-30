import React, { useState, useEffect } from 'react';
import "../styles/Profile.css";
import axios from 'axios';
import { BsPeople } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { IoFlagOutline } from "react-icons/io5";
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';

const Profile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '+62',
    dropdown2: 'Indonesia',
    dropdown3: 'DKI Jakarta',
  });

  const countries = ['Indonesia'];
  const provinces = [ 'Aceh', 'Sumatra Utara', 'Sumatra Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Bengkulu', 'Sumatra Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jawa Barat',
  'DKI Jakarta', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur',
  'Kalimantan Utara', 'Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua',
];
  const handleDropdownSelect = (dropdownKey, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [dropdownKey]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pengiriman formulir di sini jika diperlukan
  };

  const handleUpdateButtonClick = () => {
    // Tambahkan logika untuk memperbarui atau mengedit data di sini
    console.log('Tombol Update diklik');
  };

  return (
    <div className="profile" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
    <div className="header">
      <div className="header-content">
        <h3>Dashboard</h3>
        <div className="subtitle">
          <div className="icon-home">
            <GoHomeFill className="icon-home-img" />
          </div>
          <div className="subtitle-text">/ Dashboard</div>
        </div>
      </div>
      <div className="header-icons">
        {/* Notification Icon */}
        <div className="div-icon">
          <div className="div-icon-inner">
            <IoNotifications className="div-icon-bar" />
          </div>
        </div>

        {/* Profile Image */}
        <img className="div-image" src="public/asset/profile 1.jpg" alt="Profile Image" />
      </div>
    </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ fontSize: '30px', marginRight: '40px', font: 'Raleway-medium/Medium 20', marginLeft: '16px' }}>Pengaturan Akun</p>
        <a href="/profile/editprofile">
        <button
          className="btn btn-primary"
          onClick={handleUpdateButtonClick}
          style={{
            width: '120px',
            marginLeft: '660px',
            borderRadius: '12px',
            background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
            border: 'none',
            color: 'white',
          }}>
          Edit
        </button>
        </a>
      </div>

      <div className="tabel-profile" style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginLeft: '25px' }}>First Name</p>
          <div className="table-container">
            <div className="table-row">
              <BsPeople size={20} style={{ marginRight: '8px' }} /> Row 1
            </div>
          </div>

          <div style={{ margin: '16px' }}></div>
          <p style={{ marginLeft: '25px' }}>Last Name</p>
          <div className="table-container">
            <div className="table-row">
              <BsPeople size={20} style={{ marginRight: '8px' }} /> Row 2
            </div>
          </div>

          <div style={{ margin: '16px' }}></div>
          <p style={{ marginLeft: '25px' }}>Email</p>
          <div className="table-container">
            <div className="table-row with-dropdown">
              <div className="table-row">
                <LuMail size={20} style={{ marginRight: '8px' }} /> Row 3
              </div><br /><br />

            <div style={{ margin: '1px' }}></div>
                <p style={{ marginLeft: '-7px' }}>Nomor Telepon</p>
                <div className="table-container2">
                  <div className="table-row with-dropdown">
                    <div className="table-row">
                      <p>{selectedOptions.dropdown1}</p>
                    </div>
                    <br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: '16px' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginLeft: '20px' }}>Alamat</p>
          <div className="table-container">
            <div className="table-row">
              <FiMapPin size={20} style={{ marginRight: '8px' }} /> Row 2
            </div>
          </div>

          <div style={{ margin: '16px' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ marginLeft: '20px' }}>Kota</p>

            <div className="table-container">
              <div className="table-row with-dropdown">
                Row 5<br /><br /><br />

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div className="dropdown">
                    <p>Negara</p>
                    <div className="input-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {selectedOptions.dropdown2}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        {countries.map((country) => (
                          <a
                            key={country}
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleDropdownSelect('dropdown2', country)}
                          >
                            {country}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <p>Provinsi</p>
                    <div className="input-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton6"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {selectedOptions.dropdown3}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                        {provinces.map((province) => (
                          <a
                            key={province}
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleDropdownSelect('dropdown3', province)}
                          >
                            {province}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: '16px' }}></div>
        <img
          src="/src/assets/icon/profile 2.png"
          alt="Side Image"
          className="side-image"
          style={{ width: '172px', height: '172px', alignSelf: 'flex-start', marginRight: '40px', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
};

export default Profile;