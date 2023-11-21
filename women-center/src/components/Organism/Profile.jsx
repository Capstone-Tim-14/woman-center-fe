import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { BsPeople } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { IoFlagOutline } from "react-icons/io5";

const Profile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '+62',
    dropdown2: 'Indonesia',
    dropdown3: 'DKI Jakarta',
  });

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

  const [countryInfo, setCountryInfo] = useState({
    country: '',
    capital: '',
  });

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries', error);
      }
    };

    fetchCountries();
  }, []); // Dependency array kosong agar negara hanya diambil sekali

  const handleCountrySearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountrySelect = async (selectedCountry) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3/name/${selectedCountry}`);
      const countryData = response.data[0];
      const countryName = countryData.name.common;
      const capital = countryData.capital[0];
      setCountryInfo({
        country: countryName,
        capital: capital,
      });

      // Setelah memilih negara, reset dropdown "Pilih Provinsi" dan data provinsi
      handleDropdownSelect('dropdown2', countryName);
      setProvinces([]);
      setFilteredProvinces([]);
    } catch (error) {
      console.error('Error fetching country information', error);
    }
  };

  const [provinces, setProvinces] = useState([]);
  const [filteredProvinces, setFilteredProvinces] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        // Ganti URL sesuai dengan API yang menyediakan data provinsi berdasarkan negara
        const response = await axios.get(`https://api.example.com/provinces/${selectedOptions.dropdown2}`);
        setProvinces(response.data);
        setFilteredProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces', error);
      }
    };

    fetchProvinces();
  }, [selectedOptions.dropdown2]); // Menggunakan selectedOptions.dropdown2 sebagai dependency

  const handleProvinceSearch = (searchTerm) => {
    const filtered = provinces.filter((province) =>
      province.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProvinces(filtered);
  };

  const handleProvinceSelect = (selectedProvince) => {
    // Lakukan sesuatu dengan data provinsi yang dipilih
  };

  const handleUpdateButtonClick = () => {
    // Add logic for updating or editing data here
    console.log('Update button clicked');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', marginTop: '16px' }}>
        <p style={{ fontSize: '30px', marginRight: '40px', font:'Raleway-medium/Medium 20', marginLeft:'16px' }}>Pengaturan Akun</p>
        <button
          className="btn btn-primary"
          onClick={handleUpdateButtonClick}
          style={{ width: '120px', marginLeft: '635px', borderRadius: '12px' }}
        >
          Update
        </button>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginLeft: '16px' }}>First Name</p>
          <div className="table-container">
          <div className="table-row">
            <BsPeople size={20} style={{ marginRight: '8px' }} /> Row 1
          </div>
          </div>

          <div style={{ margin: '16px' }}></div>
          <p style={{ marginLeft: '20px' }}>Last Name</p>
          <div className="table-container">
          <div className="table-row">
            <BsPeople size={20} style={{ marginRight: '8px' }} /> Row 2
          </div>
          </div>

          <div style={{ margin: '16px' }}></div>
          <p style={{ marginLeft: '20px' }}>Email</p>
          <div className="table-container">
            <div className="table-row with-dropdown">
            <div className="table-row">
            <LuMail size={20} style={{ marginRight: '8px' }} /> Row 3
            </div><br/><br/>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                   <IoFlagOutline size={20} style={{ marginRight: '8px' }} />
                  {selectedOptions.dropdown1}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleDropdownSelect('dropdown1', '+60')}
                  >
                     <IoFlagOutline size={20} style={{ marginRight: '8px' }} />
                    +60
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleDropdownSelect('dropdown1', '+61')}
                  >
                     <IoFlagOutline size={20} style={{ marginRight: '8px' }} />
                    +61
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleDropdownSelect('dropdown1', '+62')}
                  >
                     <IoFlagOutline size={20} style={{ marginRight: '8px' }} />
                    +62
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: '100px' }}>
            <br />
            <div>
              <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-label" style={{ color: 'var(--black-4, #5E6366)', marginBottom: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', flex: '1 0 0', alignSelf: 'stretch', fontFamily: 'Raleway', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                  <input type="text" style={{ color: 'var(--black-4, #5E6366)', padding: '8px 16px', borderRadius: '8px', background: 'var(--input-default-background, rgba(239, 241, 249, 0.60))', border: 'none' }} />
                </label>
              </form>
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search country"
                          onChange={(e) => handleCountrySearch(e.target.value)}
                        />
                        {filteredCountries.map((country) => (
                          <a
                            key={country.name.common}
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleCountrySelect(country.name.common)}
                          >
                            {country.name.common}
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search province"
                          onChange={(e) => handleProvinceSearch(e.target.value)}
                        />
                        {filteredProvinces.map((province) => (
                          <a
                            key={province.name}
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleProvinceSelect(province.name)}
                          >
                            {province.name}
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
            src="src/assets/icon/profile 2.png"
            alt="Side Image"
            className="side-image"
            style={{ width: '172px', height: '172px', alignSelf: 'flex-start', marginRight: '16px', borderRadius: '12px' }}
          />
        </div>
    </div>
  );
};

export default Profile;
