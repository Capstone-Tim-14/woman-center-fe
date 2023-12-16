// ModalJadwalKonselor.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor';
import FormJadwalKonselor from '../form/FormJadwalDataKonselor';
import ModalBerhasilDataKonselor from '../../Molekul/Modal/ModalBerhasilDataKonselor'
import ModalGagalDataKonselor from './ModalGagalDataKonselor';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import '../../../styles/ModalJadwalKonselor.css'

function ModalJadwalKonselor({ jadwal }) {
  const id = jadwal.id;
  const [showPopup, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [formData, setFormData] = useState({
    schedule: [],
    full_name: '',
  });
  const [chekboxJadwal, setCheckboxJadwal] = useState([]);

  const handleCloseBerhasil = () => setSuccess(false);
  const handleCloseGagal = () => setFailed(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getJadwal = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/jadwal/${id}`,);
      const konselor = response.data;
      setFormData({
        full_name: konselor.full_name || '',
        schedule: konselor.schedule || [],
      })
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

      await axios.put(`http://localhost:3000/jadwal/${id}`, {
        ...formData,
        schedule: chekboxJadwal,
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChange = (updatedCheckboxes) => {
    setCheckboxJadwal(updatedCheckboxes);
  };

  useEffect(() => {
    getJadwal();
  }, [id]);

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
