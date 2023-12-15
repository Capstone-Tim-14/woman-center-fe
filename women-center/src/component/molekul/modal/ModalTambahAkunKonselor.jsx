import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonsDataKonselor from '../../atom/button/ButtonsDataKonselor'
import InputanDataKonselor from '../../atom/inputan/InputanDataKonselor'
import ButtonTambahAkunKonselor from '../../atom/button/ButtonTambahAkunKonselor'
import ButtonCloseDataKonselor from '../../atom/button/ButtonCloseDataKonselor'
import ModalBerhasilDataKonselor from '../../molekul/modal/ModalBerhasilDataKonselor'
import axios from 'axios';
import '../../../style/ModalTambahAkunKonselor.css'

function ModalTambahAkunKonselor() {
    const [show, setShow] = useState(false);
    const [NamaDepan, setNamaDepan] = useState("");
    const [NamaBelakang, setNamaBelakang] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleCloseBerhasil = () => setSuccess(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fungsi untuk menambahkan data
    const handleSubmit = async () => {
        // Validasi input kosong
        if (!NamaDepan || !NamaBelakang || !Username || !Email || !Password) {
          alert('Semua kolom harus diisi');
          return;
        }
      
        try {
          const response = await axios.post('http://localhost:3000/Konselor', {
            first_name: NamaDepan,
            last_name: NamaBelakang,
            username: Username,
            email: Email,
            password: Password,
          });
          setSuccess(true);
          handleClose();
        } catch (error) {
          console.error(error);
          setError('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
        }
      };

  return (
    <>
    <ButtonTambahAkunKonselor 
        onClick={handleShow} 
        label="Buat Akun Konselor"/>

    <div id='modal-tambahAkunKonselor'>
        <Modal 
            show={show} 
            onHide={handleClose} 
            size="sm">

        <Modal.Header id='modal-headertambahKonselor'>
            <Modal.Title id='title-tambahKonselor'>Tambah Konselor</Modal.Title>
            <ButtonCloseDataKonselor onClick={handleClose}/>
        </Modal.Header>

        <Modal.Body id='modal-bodytambahKonselor'>
            <Form>
                <Form.Group id='form-tambahKonselor'>
                    <InputanDataKonselor 
                        type="text" 
                        placeholder="Nama Depan"
                        autoFocus={true}
                        value={NamaDepan}
                        onChange={(e) => setNamaDepan(e.target.value)}
                        />
                    <InputanDataKonselor 
                        type="text" 
                        placeholder="Nama Belakang"
                        value={NamaBelakang}
                        onChange={(e) => setNamaBelakang(e.target.value)}
                        />
                    <InputanDataKonselor 
                        type="text" 
                        placeholder="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <InputanDataKonselor 
                        type="email" 
                        placeholder="Alamat Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <InputanDataKonselor 
                        type="password" 
                        placeholder="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer id='modaltambahKonselor-footer' >
            <ButtonsDataKonselor 
                className='text-primary bg-white' 
                onClick={handleClose}
                label="Batal"/>
            
            <ButtonsDataKonselor 
                className='custom-button-tambah' 
                onClick={handleSubmit}
                label="Tambah"/>
        </Modal.Footer>
        </Modal>
    </div>
    <div>
        <ModalBerhasilDataKonselor
            label='Data berhasil di tambahkan'
            Berhasil={success} 
            Close={handleCloseBerhasil}/>
    </div>
    </>
  )
}

export default ModalTambahAkunKonselor