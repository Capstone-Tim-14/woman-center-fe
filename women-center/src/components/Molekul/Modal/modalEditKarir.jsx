import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/modalEditKarir.css';
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import FailedModal from './failedModal';
import ModalSucces from './successModal';
import JobType from '../JobTypeModal';

// Main component
const modalEditKarir = () => {
  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [modalFailed, setModalFailed] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  // Form data nanti kamu sesuaiin dengan nama data yang kamu buat
  const [formData, setFormData] = useState({
    namaKarir: '',
    tanggalDitambahkan: '',
    skillRequirement: '',
    linkLinkedin: '',
    namaPerusahaan: '',
    emailPerusahaan: '',
    ukuranPerusahaan: '',
    lokasi: ''
  })

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

  // handle form data juga perlu diubah dengan nama data yang kamu buat sama masukin image
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // menyimpan Data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan data pake axios Ociiiiiiiiii

    if (!formData.namaKarir || !formData.tanggalDitambahkan || !formData.skillRequirement) {
      setModalFailed(true); // Tampilkan modal kegagalan jika ada data yang tidak lengkap
      return;
    }else{
      setModalSuccess(true);
    }
  }

  return (
    <>
    {/* ini button edit */}
      <button onClick={openModal} className="icon-button" style={{background: 'none', border: 'none'}} >
        <MdEditSquare color='#F4518D'/>
      </button>
      
    {/* ini isinya ketika di klik */}
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content_karir">
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
                      <input 
                        type="text" 
                        className="forminput"
                        value={formData.namaKarir}
                        name="namaKarir"
                        id="namaKarir"
                        onChange={handleChange}
                        placeholder="Nama Karir" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tanggalDitambahkan">Tanggal Ditambahkan</label>
                      <input 
                        type="text" 
                        className="forminput"
                        value={formData.tanggalDitambahkan}
                        onChange={handleChange}
                        name="tanggalDitambahkan" 
                        id="tanggalDitambahkan" 
                        placeholder="Tanggal Ditambahkan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="skillRequirement">Skill Requirement</label>
                      <input 
                        type="text" 
                        className="forminput"
                        value={formData.skillRequirement}
                        onChange={handleChange}
                        name="skillRequirement" 
                        id="skillRequirement" 
                        placeholder="Skill Requirement"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="linkLinkedin">Link Linkedin</label>
                      <input 
                        type="text" 
                        className="forminput" 
                        value={formData.linkLinkedin}
                        onChange={handleChange}
                        name="linkLinkedin" 
                        id="linkLinkedin" 
                        placeholder="Link Linkedin" />
                    </div>
                  </div>
                  <div className=' col-4 text-start'>
                    <div className="form-group">
                      <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                      <input 
                        type="text" 
                        className='forminput'
                        value={formData.namaPerusahaan}
                        onChange={handleChange} 
                        name="namaPerusahaan"  
                        id="namaPerusahaan"  
                        placeholder="Nama Perusahaan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ukuranPerusahaan">Ukuran Perusahaan Dan Departemen</label>
                      <input 
                        type="text" 
                        className='forminput'
                        value={formData.ukuranPerusahaan}
                        onChange={handleChange}
                        name="ukuranPerusahaan"  
                        placeholder="Ukuran Perusahaan"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lokasi">Lokasi</label>
                      <input 
                        type="text" 
                        className='forminput' 
                        value={formData.lokasi}
                        onChange={handleChange}
                        name="lokasi"
                        id="lokasi"  
                        placeholder="Lokasi" />
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

                      <div className="form-group formcheckbox">
                      {/* ini yang ditambahkan */}
                      <JobType label="Tambah Jobtype"/>
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
                      <button className='buttonsave' onClick={handleSubmit}>Simpan</button>
                    </div>
                  </div>
                </div>
              </form>
              <FailedModal 
                isOpen={modalFailed} 
                onClose={() => setModalFailed(false)}/>
              <ModalSucces 
                isOpen={modalSuccess}
                teks="Sukses merubah informasi karier"
                onClose={() => setModalSuccess(false)}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default modalEditKarir;