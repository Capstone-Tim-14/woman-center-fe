// ModalJadwalKonselor.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor';
import FormJadwalKonselor from '../form/FormJadwalDataKonselor';
import ModalBerhasilDataKonselor from '../../Molekul/Modal/ModalBerhasilDataKonselor'
import ModalGagalDataKonselor from '../Modal/ModalGagalDataKonselor';
import axios from 'axios';
import { useAuth } from '../../Layout/AuthContext';
import { Form } from 'react-bootstrap';
import '../../../styles/ModalJadwalKonselor.css'

function ModalJadwalKonselor({ jadwal }) {
  const id = jadwal.id;
  const {token} = useAuth();
  const [showPopup, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
  });
  const [chekboxJadwal, setCheckboxJadwal] = useState([]);

  const handleCloseBerhasil = () => setSuccess(false);
  const handleCloseGagal = () => setFailed(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getJadwal = async () => {
    try {
      if(token){
        const response = await axios.get(`https://api-ferminacare.tech/api/v1/admin/counselor-schedule/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const jadwal = response.data;
        setFormData(jadwal.data);
        console.log(jadwal.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async () => {
    try {

      if (!chekboxJadwal || chekboxJadwal.length === 0) {
        setFailed(true);
        return;
      }

      if(token){
        await axios.put(`http://api-ferminacare.tech/api/v1/admin/counselor/${id}/schedule/`, {
        chekboxJadwal,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChange = (updatedCheckboxes) => {
    setCheckboxJadwal(updatedCheckboxes);
  };

  useEffect(() => {
    getJadwal();
  }, []);

  return (
    <>
    {/* Tombol untuk membuka pop-up */}
    <button onClick={handleShow} id="custom-buttons">
      Jadwal
    </button>

    <div id="modalJadwal">
      <Modal show={showPopup} onHide={handleClose} size="xl">
        <Modal.Header closeButton id='modalJadwal-header'>
          <Modal.Title>Jadwal</Modal.Title>
        </Modal.Header>

        <Modal.Body id='modalJadwal-body'>
          <Form>
            <FormJadwalKonselor
              label={formData.full_name}
              onCheckboxChange={handleCheckboxChange}
            />
          </Form>
        </Modal.Body>

        <Modal.Footer id='modalJadwal-footers'>
          <div id='modalJadwal-footer'>
            <ButtonsDataKonselor
              className={"bg-white text-primary"}
              label="Batal"
              onClick={handleClose}
            />
            <ButtonsDataKonselor
              className={"custom-button"}
              label="Simpan"
              onClick={handleSubmit}
            />
          </div>
        </Modal.Footer>
      </Modal>
      <div>
        <ModalBerhasilDataKonselor
          label='Jadwal berhasil diubah dengan baik'
          Berhasil={success}
          Close={handleCloseBerhasil}
        />
        <ModalGagalDataKonselor
          label='Jadwal gagal diubah coba lagi'
          Gagal={failed}
          Close={handleCloseGagal}
        />
      </div>
    </div>
  </>
  );
}

export default ModalJadwalKonselor;
