import React, { useEffect, useState } from 'react'
import KontenDataUser from '../../Organism/konten/kontenDataUser'
import ButtonsDataKonselor from '../../Atom/button/ButtonUser'
import ButtonCloseDataKonselor from '../../Atom/button/buttonClose';
import ModalGagalDataKonselor from './ModalGagalDataKonselor'
import ModalBerhasilDataKonselor from '../../Molekul/Modal/BerhasilUser'
import Profil from '../../Atom/profil/Profil'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import '../../../styles/ModalEditDataKonselor.css'
import imageedit from "../../../assets/icon/Edit Square.png"

const ModalDataUser = ({ data }) => {

  const id = data.id
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    birthday: '',
    password: '',
  })

  const [checkboxItemsArtikel, setCheckboxItemsArtikel] = useState([])
  const [checkboxItemsKarier, setCheckboxItemsKarier] = useState([])
  const [image, setImage] = useState(null)
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCloseBerhasil = () => setSuccess(false);
  const handleCloseGagal = () => setFailed(false);

  // Fungsi ubah value input
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi callback untuk memilih fungsi
  const handleSelectedTopicsChange = (topics) => {
    setSelectedTopics(topics);
  };

  // Fungsi untuk mengambil data profil
  const getProfil = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      const konselor = response.data;
      setFormData(konselor);
      setImage(konselor.profile_picture);

    } catch (error) {
      console.log(error);
    }
}

  // Fungsi untuk mengambil data artikel
  const getArtikel = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Articles/${id}`);
      const dataKonselor = response.data;

      const articles = dataKonselor.article || [];
      const checkboxItemsData = articles.map((article) => ({
        id: article.id, // Menggunakan ID artikel
        title: article.title, // Menggunakan judul
        checked: false, // Menggunakan properti checked
      }));
      setCheckboxItemsArtikel(checkboxItemsData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   // Fungsi untuk mengambil data artikel
   const getKarier = async () => {
    try {
      const response = await axios.get(``);
      const dataKonselor = response.data;

      const karir = dataKonselor.article || [];
      const checkboxItemsData = karir.map((article) => ({
        id: article.id, // Menggunakan ID karir
        title: article.title, // Menggunakan judul
        checked: false, // Menggunakan properti checked
      }));
      setCheckboxItemsKarier(checkboxItemsData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

// handle submit
  const handleSubmit = async () => {
    try {
      // Validasi jika formData kosong atau ada propertinya yang kosong
      if (Object.values(formData).some(value => !value)) {
        setFailed(true);
        return;
      }
      // Melakukan request dengan hanya mengirimkan formData
      await axios.put(`http://localhost:3000/user/${id}`, formData);
      setSuccess(true);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    getKarier();
    getProfil();
    getArtikel();
  },[]);

    return (
        <>
        <button
          id='btn-editKonselor'
          onClick={handleShow}>
            <img 
              src={imageedit}
              alt="img-editKonselor"/>
        </button>

        <div id='modal-edit-user'>
          <Modal show={show} onHide={handleClose} size='xl'>
              <div className="container-xl my-3" id='modal-edit-user-content'>

                <header id='header-modal-editKonselor'>
                  <p className='m-0 fw-bold fs-5'>Data User</p>
                  <ButtonCloseDataKonselor onClick={handleClose}/>
                </header>

                    <Form id='form-editKonselor'>
                        <div className="col-12 d-flex mb-3">
                            <KontenDataUser/>
                            <Profil src={image}/>
                        </div>
                    </Form>

                      <div id='footer-modal-editKonselor'>
                          <ButtonsDataKonselor 
                              className={"bg-white text-primary"}
                              label="Batal" 
                              onClick={handleClose}/>

                          <ButtonsDataKonselor 
                              className={"bg-button"}
                              label="Simpan" 
                              onClick={handleSubmit}/>
                      </div>
                </div>
          </Modal>
          <div>
            <ModalBerhasilDataKonselor 
              label='Data berhasil di simpan dengan baik'
              Berhasil={success} 
              Close={handleCloseBerhasil} />
            <ModalGagalDataKonselor 
              label='Data tidak tersimpan coba lagi'
              Gagal={failed} 
              Close={handleCloseGagal} />
          </div>
        </div>
     </>
    )
}
export default ModalDataUser