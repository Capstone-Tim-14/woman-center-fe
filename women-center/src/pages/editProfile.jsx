import React, { useState } from 'react';
import '../styles/editProfile.css';
import fotoProfile from '../assets/icon/profile 1.jpg';
import fotoProfile2 from '../assets/icon/profile 2.png';
import { BsPeople } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';
import { FiMapPin } from 'react-icons/fi';
import { FaRegBuilding, FaTrash, FaUpload } from 'react-icons/fa';
import { LuTrash } from 'react-icons/lu';
import { FiUploadCloud } from 'react-icons/fi';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import Modal from "../components/Molekul/Modal/successModal";
import FailedModal from "../components/Molekul/Modal/failedModal";

const EditProfile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dropdown1: '+62',
    dropdown2: 'Indonesia',
    dropdown3: '',
  });

  const countries = ['Indonesia'];

  const provinces = [
    'Aceh',
    'Sumatra Utara',
    'Sumatra Barat',
    'Riau',
    'Kepulauan Riau',
    'Jambi',
    'Bengkulu',
    'Sumatra Selatan',
    'Kepulauan Bangka Belitung',
    'Lampung',
    'Banten',
    'Jawa Barat',
    'DKI Jakarta',
    'Jawa Tengah',
    'DI Yogyakarta',
    'Jawa Timur',
    'Bali',
    'Nusa Tenggara Barat',
    'Nusa Tenggara Timur',
    'Kalimantan Barat',
    'Kalimantan Tengah',
    'Kalimantan Selatan',
    'Kalimantan Timur',
    'Kalimantan Utara',
    'Sulawesi Utara',
    'Gorontalo',
    'Sulawesi Tengah',
    'Sulawesi Barat',
    'Sulawesi Selatan',
    'Sulawesi Tenggara',
    'Maluku',
    'Maluku Utara',
    'Papua Barat',
    'Papua',
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFailedModalOpen, setFailedModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(fotoProfile2); // Default image path

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      dropdown2: selectedCountry,
      dropdown3: '', // Reset province when country changes
    }));
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSaveChanges = () => {
    console.log('Save Changes button clicked');
    setModalOpen(true);
    // Add logic to save changes to the backend or perform necessary actions
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    // Add logic to handle cancel action, e.g., navigate back or reset the form
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
    setSelectedImage({fotoProfile2}); // Reset image to default
  };

  const closeModal = () => {
    // Close both success and failed modals
    setModalOpen(false);
    setFailedModalOpen(false);
  };

  return (
    <div className="editprofile" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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
        <img className="div-image" src={fotoProfile} alt="Profile Image" />
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ fontSize: '30px', marginRight: '40px', font: 'Raleway-medium/Medium 20', marginLeft: '16px' }}>Pengaturan Akun</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
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

          <div className="form-container">
            <p style={{ marginLeft: '20px', marginBottom: '4px' }}>Email</p>
            <div className="form-row">
              <LuMail size={20} style={{ marginRight: '8px' }} />
              <input type="text" style={{ marginBottom: '8px' }} />
            </div>
          </div>

          <div className="form-container1">
            <div className="form-row with-dropdown">
              <br />
              <p style={{ marginRight: '100px' }}>Nomor Telepon</p>
              <div style={{ display: 'flex', marginBottom: '8px' }}>
                <select
                  onChange={handleEmailDropdownChange}
                  value={selectedOptions.dropdown1}
                  className="custom-dropdown1"
                >
                  <option value="+62">+62</option>
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

        <div style={{ marginLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={selectedImage}
            alt="Profile Image"
            className="side-image"
            style={{ width: '172px', height: '172px', alignSelf: 'flex-start', marginRight: '16px', borderRadius: '12px' }}
          /><br />

          {/* Ikon Delete dan Upload */}
          <div style={{ marginLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* Ikon Delete */}
            <button
              onClick={handleDelete}
              style={{ marginRight: '8px', padding: '12px', background: '#F8E8EE', border: 'none', cursor: 'pointer', borderRadius: '12px', color: 'black' }}
            >
              <LuTrash size={18} />
            </button>

            {/* Ikon Upload */}
            <label htmlFor="image-upload" style={{ padding: '11px', background: '#F8E8EE', border: 'none', cursor: 'pointer', borderRadius: '12px', color: 'black' }}>
              <FiUploadCloud size={20} />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>

          {/* Save Changes and Cancel buttons */}
          <div style={{ display: 'flex', gap: '16px', position: 'absolute', bottom: '10px', right: '10px' }}>
            <button onClick={handleCancel} style={{ width: '175px', height: '37px', background: '#F8E8EE', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
              Cancel
            </button>
            <button onClick={handleSaveChanges} style={{ width: '175px', height: '37px', background: 'linear-gradient(257.34deg, #FD8BA3 0%, #FF5BCD 100%)', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
              Save Changes
            </button>
          </div>
        </div>
      </form>

      {/* Save Changes and Cancel buttons */}
      <div style={{ display: 'flex', gap: '16px', position: 'absolute', bottom: '10px', right: '10px' }}>
        <button onClick={handleCancel} style={{ width: '175px', height: '37px', background: '#F8E8EE', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
          Cancel
        </button>
        <button onClick={handleSaveChanges} style={{ width: '175px', height: '37px', background: 'linear-gradient(257.34deg, #FD8BA3 0%, #FF5BCD 100%)', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
          Save Changes
        </button>
      </div>

      {/* Modal for success message */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Modal for failed message */}
      <FailedModal isOpen={isFailedModalOpen} onClose={closeModal} />
    </div>
    </div>
  );
};

export default EditProfile;
