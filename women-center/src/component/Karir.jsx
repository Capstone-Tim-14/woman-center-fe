import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Karir.css';
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";

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
      <MdEditSquare color='#F4518D'className="icon-button" onClick={openModal} />
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <div className='mainText'>
              <h5 style={{ color: 'black' }}>Edit Rekomendasi Karier</h5>
              <form className=' m-5'>
                <div className='row auto'>
                  <div className='col-3 text-start' style={{ color: 'black' }}>
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
                  <div className='col-6 text-start' style={{ marginLeft: '-85px', color: 'black' }}>
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
                  <div className="form-group">
                      <label htmlFor="namaKarir">Nama Karir</label>
                      <input type="text" className="forminput" id="namaKarir" placeholder="Nama Karir" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tanggalDitambahkan">Tanggal Ditambahkan</label>
                      <input type="text" className="forminput" id="tanggalDitambahkan" placeholder="Tanggal Ditambahkan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="skillRequirement">Skill Requirement</label>
                      <input type="text" className="forminput" id="skillRequirement" placeholder="Skill Requirement" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="linkLinkedin">Link Linkedin</label>
                      <input type="text" className="forminput" id="linkLinkedin" placeholder="Link Linkedin" />
                    </div>
                  </div>
                  <div className=' col-4 text-start'>
                    <div className="form-group">
                      <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                      <input type="text" className='forminput' id="namaPerusahaan"  placeholder="Nama Perusahaan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ukuranPerusahaan">Ukuran Perusahaan Dan Departemen</label>
                      <input type="text" className='forminput' id="ukuranPerusahaan"  placeholder="Ukuran Perusahaan"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lokasi">Lokasi</label>
                      <input type="text" className='forminput' id="lokasi"  placeholder="Lokasi" />
                    </div>
                  </div>
                  <div className=' col-4 text-start '>
                    <label htmlFor="jobType">Job Type</label><br />
                    <div className='row '>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="fullTime" />
                        <label htmlFor="fullTime">Full-Time</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="freelance" />
                        <label htmlFor="freelance">Freelance</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="kontrak" />
                        <label htmlFor="kontrak">Kontrak</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="magang" />
                        <label htmlFor="magang">Magang</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="remote" />
                        <label htmlFor="remote">Remote</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="proyek" />
                        <label htmlFor="proyek">Proyek</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="shift" />
                        <label htmlFor="shift">Shift</label>
                      </div>
                      <div className="form-group formcheckbox">
                        <input type="checkbox" id="sementara" />
                        <label htmlFor="sementara">Sementara</label>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-start '>
                      <div className="form-group">
                        <label htmlFor="aboutJob">About The Job</label> <br />
                        <textarea className='formabout' id="aboutJob"  placeholder="About The Job"></textarea>
                      </div>
                    </div>
                    <div className='col-4 text-start'>
                      <div className="form-group">
                        <label htmlFor="aboutCompany">About The Company</label> <br />
                        <textarea className='formabout' id="aboutCompany"  placeholder="About The Company"></textarea>
                      </div>
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