import React, { useState } from 'react';
import './Karir.css';
import { LuTrash, LuUploadCloud } from "react-icons/lu";
import { RiGalleryLine } from "react-icons/ri";


const PlaceholderIcon = () => (
    <div style={{ color: 'gray', fontSize: '20px' }}>
      {/* You can replace the content inside the div with your desired static icon */}
      Placeholder
    </div>
  );
  
// Main component
const Karir = () => {
  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedImage1, setUploadedImage1] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);

  // Modal open/close functions
  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  // Image upload/delete functions
  const handleDeleteImage = (borderNumber) => {
    console.log(`Delete image from border ${borderNumber}`);
    // Add your logic for deleting the image here
    if (borderNumber === 1) {
      setUploadedImage1(null);
    } else if (borderNumber === 2) {
      setUploadedImage2(null);
    }
  };

  const handleUploadImage = (borderNumber, e) => {
    console.log(`Upload image to border ${borderNumber}`);
    const file = e.target.files[0];

    if (file) {
      // Add your logic for handling the uploaded image (e.g., send to server)
      if (borderNumber === 1) {
        setUploadedImage1(URL.createObjectURL(file));
      } else if (borderNumber === 2) {
        setUploadedImage2(URL.createObjectURL(file));
      }
    }
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

  return (
    <div>
      <button onClick={openModal}>Buka Modal</button>

      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Karier</h3>

            <div className="horizontal-forms">
              {/* Border 1 */}
              <div style={{ width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ color: 'black' }}>Foto Profile</p>
              <div style={{ width: '150px', height: '154px', padding: '74px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', flexShrink: 0, borderRadius: '12px', border: '1px solid var(--Grey, #E1E2E9)', background: 'var(--Main-Background, #F4F5FA)' }}>
                {uploadedImage1 ? (
                  <img
                    src={uploadedImage1}
                    alt="Uploaded Image"
                    style={{
                      width: '150px',
                      height: '154px',
                      borderRadius: '12%',  // To make the image circular
                    }}
                  />
                ) : (
                  // Display PlaceholderIcon if no image is uploaded
                  <RiGalleryLine /> 
                )}
                {uploadedImage1 ? null : (
                  <p style={{ color: '#5570F1' }}>upload gambar</p>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <label htmlFor="fileInput1" style={{ display: 'none' }}>Upload</label>
                  <input
                    type="file"
                    id="fileInput1"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleUploadImage(1, e)}
                  />
                  <button onClick={() => document.getElementById('fileInput1').click()} style={{ color: 'black', background: '#FFF2E2', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <LuUploadCloud />
                  </button>
                  {uploadedImage1 && (
                    <button onClick={() => handleDeleteImage(1)} style={{ color: 'black', background: '#FFF2E2', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px', border: 'none' }}>
                      <LuTrash />
                    </button>
                  )}
                </div>
              </div>
            </div>

              {/* Border 2 */}
              <div style={{ width: '540px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ color: 'black'}}>Foto Sampul</p>
              <div style={{ width: '540px', height: '154px', padding: '74px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', flexShrink: 0, borderRadius: '12px', border: '1px solid var(--Grey, #E1E2E9)', background: 'var(--Main-Background, #F4F5FA)' }}>
                {uploadedImage2 ? (
                  <img
                    src={uploadedImage2}
                    alt="Uploaded Image"
                    style={{
                      width: '540px',
                      height: '154px',
                      borderRadius: '12%',  // To make the image circular
                    }}
                  />
                ) : (
                  // Display PlaceholderIcon if no image is uploaded
                  <RiGalleryLine />
                )}
                {uploadedImage2 ? null : (
                  <p style={{ color: '#5570F1' }}>upload gambar</p>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <label htmlFor="fileInput2" style={{ display: 'none' }}>Upload</label>
                  <input
                    type="file"
                    id="fileInput2"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleUploadImage(2, e)}
                  />
                  <button onClick={() => document.getElementById('fileInput2').click()} style={{ color: 'black', background: '#FFF2E2', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <LuUploadCloud />
                  </button>
                  {uploadedImage2 && (
                    <button onClick={() => handleDeleteImage(2)} style={{ color: 'black', background: '#FFF2E2', borderRadius: '3px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px', border: 'none' }}>
                      <LuTrash />
                    </button>
                  )}
                </div>
              </div>
            </div>
            </div>
            
              {/* mulai form */}
            <div className="form-container">
              {/* Form 1 and 2 */}
              <div className="horizontal-forms">
                <form className="styled-form">
                  <div>
                    <label>Nama Karier:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>

                <form className="styled-form">
                  <div>
                    <label>Nama Perusahaan:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>
              </div>
            </div>
            <div>
            <div className="checkbox-container">
                <p>Job style:</p>
                <label>
                  <input type="checkbox" />
                  Full-Time
                </label>
                <label>
                  <input type="checkbox" />
                  Freelance
                </label>
                <label>
                  <input type="checkbox" />
                  Kontrak
                </label>
                <label>
                  <input type="checkbox" />
                  Magang
                </label>
                <label>
                  <input type="checkbox" />
                  Remote
                </label>
                <label>
                  <input type="checkbox" />
                  Proyek
                </label>
                <label>
                  <input type="checkbox" />
                  Shift
                </label>
                <label>
                  <input type="checkbox" />
                  Sementara
                </label>
              </div>
              </div>


            <div className="form-container">
              {/* Form 3 and the rest */}
              <div className="horizontal-forms">
                <form className="styled-form">
                  <div>
                    <label>Tanggal Di Tambahkan:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>

                <form className="styled-form">
                  <div>
                    <label>Ukuran Perusahaan dan Departement:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>
            </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>Skill Requirement:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>

                    <form className="styled-form">
                    <div>
                        <label>Lokasi:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>Url Linkedin:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>About The Job:</label><br/>
                        <input type="text"  style={{ height: '146px'}}/>
                    </div>
                    {/* Add more form fields as needed */}
                    </form>

                    <form className="styled-form">
                    <div>
                        <label>About The Companyyy:</label><br/>
                        <input type="text"  style={{ height: '146px'}} />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
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
    </div>
        
    )}
    </div>
  );
};

export default Karir;
