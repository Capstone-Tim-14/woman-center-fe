import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonUser from '../../Atom/button/ButtonUser'
import ButtonTambah from '../../Atom/button/buttonTambahAkunUser';
import ButtonClose from '../../Atom/button/buttonClose';
import Inputan from '../../Atom/inputan/InputanUser';
//import Buttonn from '../../Atom/button/button';
import BerhasilUser from '../../Molekul/Modal/BerhasilUser'
import axios from 'axios';
import '../../../styles/ModalTambahAkunKonselor.css';


function ModalTambahAkunUser() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseBerhasil = () => setSuccess(false);

    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
    })
    const [success, setSuccess] = useState(false);


    const handleSubmit = async () => {
      // Validasi input kosong
      if (!NamaDepan || !NamaBelakang || !Username || !Email || !Password) {
        alert('Semua kolom harus diisi');
        return;
      }
    
      try {
        const response = await axios.post('http://localhost:3000/User', {
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
      <ButtonTambah style={{backgroundColor: '#F4518D'}} onClick={handleShow} label="Buat Akun User"/>

      <div id='modal-tambahAkunKonselor'>
        <Modal 
            show={show} 
            onHide={handleClose} 
            style={{width: '430px', height: '670px', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}
            >

        <Modal.Header id='modal-headertambahKonselor'style={{top: '50%', marginBottom: '20px'}}>
            <Modal.Title id='title-tambahKonselor'>Tambah User</Modal.Title>
            <ButtonClose onClick={handleClose}/>
        </Modal.Header>

        <Modal.Body id='modal-bodytambahKonselor'>
            <Form>
                <Form.Group id='form-tambahKonselor'>
                    <Inputan
                        type="text" 
                        placeholder="Nama Depan"
                        autoFocus={true}
                        value={formData.first_name}
                        onChange={(e) => setNamaDepan(e.target.value)}
                        />
                    <Inputan 
                        type="text" 
                        placeholder="Nama Belakang"
                        value={formData.last_name}
                        onChange={(e) => setNamaBelakang(e.target.value)}
                        />
                    <Inputan 
                        type="text" 
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <Inputan 
                        type="email" 
                        placeholder="Alamat Email"
                        value={formData.email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <Inputan
                        type="password" 
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer id='modaltambahKonselor-footer' >
            <ButtonUser 
                className='text-primary bg-white' 
                onClick={handleClose}
                label="Batal"/>
            
            <ButtonUser 
                className='custom-button-tambah' 
                onClick={handleSubmit}
                label="Tambah"/>
        </Modal.Footer>
        </Modal>
    </div>
    <div>
        <BerhasilUser
            label='Data berhasil di tambahkan'
            Berhasil={success} 
            Close={handleCloseBerhasil}/>
    </div>
    </>
  )

}


export default ModalTambahAkunUser