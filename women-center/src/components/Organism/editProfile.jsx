import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import axios from 'axios';
import { BsPeople } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

const EditProfile = () => {
    const [selectedOptions, setSelectedOptions] = useState({
      dropdown1: '+62',
      dropdown2: 'Indonesia',
      dropdown3: 'DKI Jakarta',
    });
  
    const handleInputChange = (e, key) => {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [key]: e.target.value,
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <p style={{ fontSize: '30px', marginRight: '40px', font: 'Raleway-medium/Medium 20', marginLeft: '16px' }}>Pengaturan Akun</p>
          <button
            className="btn btn-primary"
            onClick={handleUpdateButtonClick}
            style={{
              width: '120px',
              marginLeft: 'auto',
              borderRadius: '12px',
              background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
              border: 'none',
              color: 'white',
            }}>
            Update
          </button>
        </div>
  
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div className="form-container">
              <p style={{ marginLeft: '16px' }}>First Name</p>
              <div className="form-row">
                <BsPeople size={20} style={{ marginRight: '8px' }} />
                <input
                  type="text"
                  value={selectedOptions.dropdown1}
                  onChange={(e) => handleInputChange(e, 'dropdown1')}
                />
              </div>
            </div>
  
            <div className="form-container">
              <p style={{ marginLeft: '20px' }}>Last Name</p>
              <div className="form-row">
                <BsPeople size={20} style={{ marginRight: '8px' }} />
                <input
                  type="text"
                  value={selectedOptions.dropdown2}
                  onChange={(e) => handleInputChange(e, 'dropdown2')}
                />
              </div>
            </div>
  
            <div className="form-container">
              <p style={{ marginLeft: '20px' }}>Email</p>
              <div className="form-row">
                <LuMail size={20} style={{ marginRight: '8px' }} />
                <input
                  type="text"
                  value={selectedOptions.dropdown3}
                  onChange={(e) => handleInputChange(e, 'dropdown3')}
                />
              </div>
            </div>
          </div>
  
          <div style={{ marginLeft: '20px', marginBottom: '20px' }}>
            <div className="form-container">
              <p style={{ marginLeft: '20px' }}>Alamat</p>
              <div className="form-row with-dropdown">
                <div className="form-row">
                  <FiMapPin size={20} style={{ marginRight: '8px' }} />
                  <input
                    type="text"
                    value={selectedOptions.dropdown3}
                    onChange={(e) => handleInputChange(e, 'dropdown3')}
                  />
                </div>
              </div>
            </div>
  
            <div className="form-container">
              <p style={{ marginLeft: '20px' }}>Kota</p>
              <div className="form-row with-dropdown">
                <input
                  type="text"
                  value={selectedOptions.dropdown3}
                  onChange={(e) => handleInputChange(e, 'dropdown3')}
                />
              </div>
            </div>
          </div>
  
          <img
            src="/src/assets/icon/profile 2.png"
            alt="Side Image"
            className="side-image"
            style={{ width: '172px', height: '172px', alignSelf: 'flex-start', marginRight: '16px', borderRadius: '12px' }}
          />
        </form>
      </div>
    );
  };
  
  export default EditProfile;