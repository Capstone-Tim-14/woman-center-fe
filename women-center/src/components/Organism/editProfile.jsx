import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './editProfile.css';
import { BsPeople } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';
import { FiMapPin } from 'react-icons/fi';
import { FaRegBuilding, FaTrash, FaUpload } from 'react-icons/fa'; // Menambahkan ikon delete dan upload

const EditProfile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '+62',
    dropdown2: 'Indonesia',
    dropdown3: 'DKI Jakarta',
  });

  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    // Mendapatkan daftar negara
    axios.get('https://restcountries.com/v2/all')
      .then((response) => {
        setCountries(response.data.map(country => country.name));
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      dropdown2: selectedCountry,
    }));

    // Mendapatkan daftar provinsi dari negara yang dipilih
    axios.get(`https://restcountries.com/v2/name/${selectedCountry}`)
      .then((response) => {
        const countryData = response.data[0];
        if (countryData.subdivisions) {
          setProvinces(Object.keys(countryData.subdivisions));
        } else {
          setProvinces([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching provinces:', error);
        setProvinces([]);
      });
  };

  const handleEmailDropdownChange = (e) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      dropdown1: e.target.value,
    }));
  };

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
            marginLeft: '710px',
            borderRadius: '12px',
            background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
            border: 'none',
            color: 'white',
          }}>
          Update
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <div className="form-container">
            <p style={{ marginLeft: '16px', marginBottom: '4px' }}>First Name</p>
            <div className="form-row">
              <BsPeople size={20} style={{ marginRight: '8px' }} />
              <input type="text" style={{ marginBottom: '8px' }} />
            </div>
          </div>

          <div className="form-container">
            <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Last Name</p>
            <div className="form-row">
              <BsPeople size={20} style={{ marginRight: '8px' }} />
              <input type="text" style={{ marginBottom: '8px' }} />
            </div>
          </div>

          <div className="form-container1">
            <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Email</p>
            <div className="form-row with-dropdown">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LuMail size={20} style={{ marginRight: '8px' }} />
                <input type="text" style={{ marginBottom: '8px' }} />
              </div>
              <br />
              <p style={{ marginRight: '100px' }}>Nomor Telepon</p>
              <div style={{ display: 'flex', marginBottom: '8px' }}>
                <select
                  onChange={handleEmailDropdownChange}
                  value={selectedOptions.dropdown1}
                  className="custom-dropdown1"
                >
                  <option value="+62">+62</option>
                  <option value="+63">+63</option>
                </select>
                <div className='form-container2' >
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <div className="form-container">
            <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Alamat</p>
            <div className="form-row with-dropdown">
              <div className="form-row">
                <FiMapPin size={20} style={{ marginRight: '8px' }} />
                <input
                  type="text" style={{ marginBottom: '8px' }} />
              </div>
            </div>
          </div>

          <div className="form-container">
            <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Kota</p>
            <div className="form-row with-dropdown">
              <div className="form-row">
                <FaRegBuilding size={20} style={{ marginRight: '8px' }} />
                <input
                  type="text" style={{ marginBottom: '8px' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div className="form-container">
              <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Negara</p>
              <div className="form-row with-dropdown" style={{ marginLeft: '8px' }}>
                <select
                  onChange={handleCountryChange}
                  value={selectedOptions.dropdown2}
                  className="custom-dropdown"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-container">
              <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Provinsi</p>
              <div className="form-row with-dropdown" style={{ marginLeft: '8px' }}>
                <select
                  onChange={(e) => handleInputChange(e, 'dropdown3')}
                  value={selectedOptions.dropdown3}
                  className="custom-dropdown"
                >
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/src/assets/icon/profile 2.png"
          alt="Side Image"
          className="side-image"
          style={{ width: '172px', height: '172px', alignSelf: 'flex-start', marginRight: '16px', borderRadius: '12px' }}
        />

        {/* Ikon Delete dan Upload */}
        <div style={{ marginLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Ikon Delete */}
          <div style={{ marginBottom: '8px' }}>
            <FaTrash size={20} style={{ marginRight: '8px' }} />
            <span>Delete</span>
          </div>

          {/* Ikon Upload */}
          <div>
            <FaUpload size={20} style={{ marginRight: '8px' }} />
            <span>Upload</span>
          </div>
        </div>
      </form>

      <div style={{ marginLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Ikon Delete */}
            <button
              onClick={() => {
                // Tambahkan logika untuk menghandle delete di sini
                console.log('Delete button clicked');
              }}
              style={{ marginBottom: '8px', background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
            >
              <FaTrash size={20} style={{ marginRight: '8px' }} />
              <span>Delete</span>
            </button>

            {/* Ikon Upload */}
            <button
              onClick={() => {
                
                console.log('Upload button clicked');
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
            >
              <FaUpload size={20} style={{ marginRight: '8px' }} />
              <span>Upload</span>
            </button>
          </div>
        </div>
  );
};

export default EditProfile;
