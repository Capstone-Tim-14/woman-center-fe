import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Karir.css';
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";

// Main component
const Karir = () => {
  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  // Modal open/close functions
  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteProfileImage = () => {
    setProfileImage(null);
  };

  const handleDeleteCoverImage = () => {
    setCoverImage(null);
  };

  return (
    <>
      <button onClick={openModal}>Buka Modal</button>
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <div className='mainText'>
              <h3 style={{color : 'black'}}>Karier</h3>
              <form className=' m-5'>
                <div className='row auto'>
                  <div className='col-3 text-start' style={{color:'black'}}>
                  <label htmlFor="profileImage">Foto Profil</label>
                    <div className='fotoprofile'>
                      <div>
                        {profileImage && (
                          <>
                            <div className="uploaded-image-container">
                              <img
                                src={profileImage}
                                alt="Profile Image"
                                className="uploaded-image"
                              />
                            </div>
                            <FiTrash2 className='delete-icon' onClick={handleDeleteProfileImage} />
                          </>
                        )}
                        <label htmlFor='profileImage' className='upload-icon'>
                          <FiUploadCloud />
                          <input
                            type='file'
                            id='profileImage'
                            accept='image/*'
                            onChange={handleProfileImageChange}
                            style={{ display: 'none' }}
                          />
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className='col-6 text-start' style={{marginLeft : '-85px', color:'black'}}>
                    <label htmlFor="coverImage">Foto Sampul</label>
                    <div className='fotosampul'>
                      <div >
                        {coverImage && (
                          <>
                            <img
                              src={coverImage}
                              alt="Cover Image"
                              className="uploaded-image"
                            />
                            <FiTrash2 className='delete-icon' onClick={handleDeleteCoverImage} />
                          </>
                        )}
                        <label htmlFor='coverImage' className='upload-icon'>
                          <FiUploadCloud />
                          <input
                            type='file'
                            id='coverImage'
                            accept='image/*'
                            onChange={handleCoverImageChange}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className=' row p-2'>
                    <div className=' col-4 text-start'>
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' />  
                    </div>
                    <div className=' col-4 text-start'>
                    <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                        <label htmlFor="">Nama Karir</label>
                        <input type="text" className='forminput' /> 
                    </div>
                    <div className=' col-4 text-start '>
                    <label htmlFor="">Nama Karir</label><br/>
                        <div className='row '>
                        <label className='formcheckbox'>
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
                    <div className='row'>
                        <div className='col-4 text-start '>
                            <label htmlFor="">About The Job</label> <br/>
                            <textarea className='formabout' ></textarea>
                        </div>
                        <div className='col-4 text-start'>
                        <label htmlFor="">About The Job</label> <br/>
                        <textarea className='formabout' ></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-end'>
                            <button className='btnbatal'>Batal</button>
                            <button className='buttonsave'>Simpan</button>
                        </div>
                    </div>
                </div>
            </form>
           </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Karir;
