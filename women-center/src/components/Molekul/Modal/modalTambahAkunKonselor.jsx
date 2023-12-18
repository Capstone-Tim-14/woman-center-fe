import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor';
import InputanDataKonselor from '../../Atom/inputan/InputanDataKonselor';
import ButtonTambahAkunKonselor from '../../Atom/button/ButtonTambahAkunKonselor';
import ButtonCloseDataKonselor from '../../Atom/button/ButtonCloseDataKonselor';
import ModalBerhasilDataKonselor from '../../Molekul/Modal/ModalBerhasilDataKonselor';
import axios from 'axios';
import { useAuth } from '../../Layout/AuthContext';
import '../../../styles/ModalTambahAkunKonselor.css';

function ModalTambahAkunKonselor() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    description: 'ini conselor terbaik',
    phone_number: '628120813710273',
    certification: 'certification.jpg',
    address: 'Jl jalan',
  });
  const [success, setSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const { token } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCloseBerhasil = () => setSuccess(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fungsi untuk menambahkan data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name || !formData.username || !formData.email || !formData.password) {
      alert('Semua kolom harus diisi');
      return;
    }

    try {
      const tambahKonselor = new FormData();
      tambahKonselor.append('first_name', formData.first_name);
      tambahKonselor.append('last_name', formData.last_name);
      tambahKonselor.append('username', formData.username);
      tambahKonselor.append('email', formData.email);
      tambahKonselor.append('password', formData.password);
      tambahKonselor.append('description', formData.description);
      tambahKonselor.append('phone_number', formData.phone_number);
      tambahKonselor.append('certification', formData.certification);
      tambahKonselor.append('address', formData.address);

      if (token) {
        await axios.post(
          'https://api-ferminacare.tech/api/v1/admin/counselors/register',
          tambahKonselor,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSuccess(true);
        handleClose();
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Ambil pesan kesalahan validasi dari balasan server
        const validationErrors = error.response.data.errors;
        setErrorMessages(validationErrors);
      } else {
        // Tangani kesalahan lainnya
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <ButtonTambahAkunKonselor onClick={handleShow} label="Buat Akun Konselor" />

      <div id="modal-tambahAkunKonselor">
        <Modal
          show={show}
          onHide={handleClose}
          style={{
            width: '430px',
            height: '670px',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        >
          <Modal.Header id="modal-headertambahKonselor">
            <Modal.Title id="title-tambahKonselor">Tambah Konselor</Modal.Title>
            <ButtonCloseDataKonselor onClick={handleClose} />
          </Modal.Header>

          <Modal.Body id="modal-bodytambahKonselor">
            <Form>
              <Form.Group id="form-tambahKonselor">
                <InputanDataKonselor
                  type="text"
                  placeholder="Nama Depan"
                  autoFocus={true}
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <InputanDataKonselor
                  type="text"
                  placeholder="Nama Belakang"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                <InputanDataKonselor
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <InputanDataKonselor
                  type="email"
                  placeholder="Alamat Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputanDataKonselor
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer id="modaltambahKonselor-footer">
            <ButtonsDataKonselor
              className="text-primary bg-white"
              onClick={handleClose}
              label="Batal"
            />

            <ButtonsDataKonselor
              className="custom-button-tambah"
              onClick={handleSubmit}
              label="Tambah"
            />
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <ModalBerhasilDataKonselor
          label="Data berhasil di tambahkan"
          Berhasil={success}
          Close={handleCloseBerhasil}
        />
      </div>
    </>
  );
}

export default ModalTambahAkunKonselor;
