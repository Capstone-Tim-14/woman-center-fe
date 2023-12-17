import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor'
import InputanDataKonselor from '../../Atom/inputan/InputanDataKonselor'
import ButtonTambahAkunKonselor from '../../Atom/button/ButtonTambahAkunKonselor'
import ButtonCloseDataKonselor from '../../Atom/button/ButtonCloseDataKonselor'
import ModalBerhasilDataKonselor from '../../Molekul/Modal/ModalBerhasilDataKonselor'
import axios from 'axios';
import { useAuth } from '../../Layout/AuthContext';
import '../../../styles/ModalTambahAkunKonselor.css'

function ModalTambahAkunKonselor() {
    const [show, setShow] = useState(false);
    const [NamaDepan, setNamaDepan] = useState("");
    const [NamaBelakang, setNamaBelakang] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

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
          if(token) {
              await axios.post('https://api-ferminacare.tech/api/v1/admin/counselors/register', {
              first_name: NamaDepan,
              last_name: NamaBelakang,
              username: Username,
              email: Email,
              password: Password,
            })
            setSuccess(true);
            handleClose();
          }else{
            alert('Anda harus login terlebih dahulu');
          }
        } catch (error) {
          console.error(error);
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
            style={{width: '430px', height: '670px', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}
            >

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