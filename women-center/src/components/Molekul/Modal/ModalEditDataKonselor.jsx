import React, { useEffect, useState } from 'react'
import FormDataKonselor from '../../Molekul/form/FormDataKonselor'
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor'
import ButtonCloseDataKonselor from '../../Atom/button/ButtonCloseDataKonselor'
import ModalGagalDataKonselor from './ModalGagalDataKonselor'
import ModalBerhasilDataKonselor from '../../Molekul/Modal/ModalBerhasilDataKonselor'
import Profil from '../../Atom/profil/Profil'
import TopikKeahlian from '../../Molekul/list/topikKeahlian copy'
import Artikel from '../../Molekul/list/artikeldatakonselor'
import Karier from '../../Molekul/list/karierdatakonselor'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import '../../../styles/ModalEditDataKonselor.css'
import imageedit from "../../../assets/icon/Edit Square.png"

const ModalEditDataKonselor = ({ data }) => {

  const id = data.id
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    education: '',
    birthday: '',
    email: '',
    password: '',
    description: '',
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
      const response = await axios.get(`http://localhost:3000/konselor/${id}`);
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
      await axios.put(`http://localhost:3000/konselor/${id}`, formData);
      setSuccess(true);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChangeArtikel = (id) => {
    setCheckboxItemsArtikel((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };  

  const handleCheckboxChangeKarier = (id) => {
    setCheckboxItemsKarier((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
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

        <div id='modal-editKonselor'>
          <Modal show={show} onHide={handleClose} size='xl'>
              <div className="container-xl my-3" id='modal-editKonselor-content'>

                <header id='header-modal-editKonselor'>
                  <p className='m-0 fw-bold fs-5'>Data Konselor</p>
                  <ButtonCloseDataKonselor onClick={handleClose}/>
                </header>

                    <Form id='form-editKonselor'>
                        <div className="col-12 d-flex gap-3 mb-3">
                          <div className='col-8'>
                          <FormDataKonselor 
                              first_name={formData.first_name}
                              last_name={formData.last_name}
                              username={formData.username}
                              education={formData.education}
                              birthday={formData.birthday}
                              email={formData.email}
                              password={formData.password}
                              description={formData.description}
                              onInputChange={handleInputChange}/>
                          </div>
                      
                          <div className='col-4'>
                            <Profil src={image}/>
                          </div>
                        </div>

                          <div className='d-flex gap-3'>
                              <TopikKeahlian onSelectedTopicsChange={handleSelectedTopicsChange} />
                              <Artikel 
                                  artikel={id}
                                  checkboxArtikel={checkboxItemsArtikel} 
                                  onCheckBoxChange={handleCheckboxChangeArtikel}/>
                              <Karier 
                                  karir={id}
                                  checkboxKarier={checkboxItemsKarier} 
                                  onCheckBoxChange={handleCheckboxChangeKarier} />
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
export default ModalEditDataKonselor