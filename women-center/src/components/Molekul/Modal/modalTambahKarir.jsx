import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/modalEditKarir.css';
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";
import FailedModal from './failedModal';
import ModalSucces from './successModal';
import JobType from '../JobTypeModal';
import axios from 'axios';
import { useAuth } from '../../Layout/AuthContext'

// Main component
const modalTambahKarir = () => {
  // State variables
  const { token, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [modalFailed, setModalFailed] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [formData, setFormData] = useState({
    namaKarir: '',
    tanggalDitambahkan: '',
    skillRequirement: '',
    linkLinkedin: '',
    namaPerusahaan: '',
    emailPerusahaan: '',
    ukuranPerusahaan: '',
    lokasi: '',
    aboutJob: '',       
    aboutCompany: ''     
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if required fields are filled
    if (!formData.namaKarir || !formData.tanggalDitambahkan || !formData.skillRequirement) {
      setModalFailed(true); // Show failure modal if required fields are not filled
      return;
    }
  
    try {
      // Prepare form data for the API request
      const apiFormData = new FormData();
      apiFormData.append('title_job', formData.namaKarir);
      apiFormData.append('company_name', formData.namaPerusahaan);
      apiFormData.append('logo', profileImage); // Assuming profileImage is the file from the input
      apiFormData.append('cover', coverImage); // Assuming coverImage is the file from the input
      apiFormData.append('location', formData.lokasi);
      apiFormData.append('size_company_employee', formData.ukuranPerusahaan);
      apiFormData.append('company_industry', formData.industriPerusahaan); // Change to the actual field name
      apiFormData.append('required_skill', formData.skillRequirement);
      apiFormData.append('linkdin_url', formData.linkLinkedin);
      apiFormData.append('about_job', formData.aboutJob || '');
      apiFormData.append('about_company', formData.aboutCompany || '');
  
      // Make API request using Axios with the token
      const response = await axios.post(
        'https://api-ferminacare.tech/api/v1/admin/career',
        apiFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Check if the request was successful
      if (response.status === 200) {
        setModalSuccess(true); // Show success modal
      } else {
        setModalFailed(true); // Show failure modal if the request was not successful
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setModalFailed(true); // Show failure modal if an error occurred
    }
  };
  return (
    <>
    {/* ini button edit */}
      <button onClick={openModal} className="btn bg-button text-white fw-medium  rounded-4" style={{background: 'var(--gradient-button-grad, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))', width: '200px', backgroundColor: '#F4518D', border: 'none'}} >
        + Tambah Karier
      </button>
      
    {/* ini isinya ketika di klik */}
      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content_karir">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <div className='mainText'>
              <h5 style={{ color: 'black' }}>Tambah Rekomendasi Karier</h5>
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
                      <button className='btnbatal' style={{backgroundColor: '#FFF'}}>Batal</button>
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
                teks="Sukses menambah informasi karier"
                onClose={() => setModalSuccess(false)}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default modalTambahKarir;