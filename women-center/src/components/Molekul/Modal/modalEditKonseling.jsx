import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonTambah from '../../Atom/button/buttonTambahAkun';
import ButtonClose from '../../Atom/button/buttonClose';
import Inputan from '../../Atom/inputan/Inputan';
import Buttonn from '../../Atom/button/button';


const ModalEditKonseling = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onEditKonseling = () => setShow(true);

    const [NamaPaket, setNamaPaket] = useState("");
    const [NamaKonselor, setNamaKonselor] = useState("");
    const [NamaUser, setNamaUser] = useState("");

    const handleClick = () => {
      // Validasi: Pastikan semua field sudah diisi
      if (!NamaPaket || !NamaKonselor || !NamaUser ) {
        // Tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
        console.error('Harap isi semua field sebelum menambahkan konselor.');
        return;
      }
      onEditKonseling({
        nama_paket: "",
        nama_konselor: "",
        nama_user: "",
      });
    
      handleClose();
    };
    
    const ModalEditKonseling = ({ onEditKonseling }) => {
      // ... rest of the component code
    };
      
    return(
        <>

      <ButtonTambah style={{backgroundColor: '#FFF'}} onClick={handleShow} label="+ Tambah Acara"/>

      <Modal 
        show={show} 
        onHide={handleClose} 
        style={{width: '380px', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}>

        <Modal.Header >
          <Modal.Title className='fs-6'>Keterangan Konseling</Modal.Title>
          <ButtonClose onClick={handleClose}/>
        </Modal.Header>

        <Modal.Body>
          <Form>
          <Form.Group className="d-flex flex-column gap-3 ">
          <Inputan 
                type="text" 
                placeholder="Nama Paket"
                autoFocus={true}
                value={NamaPaket}
                onChange={(e) => setNamaPaket(e.target.value)}
              />
              <Inputan 
                type="text" 
                placeholder="Nama Konselor"
                value={NamaKonselor}
                onChange={(e) => setNamaKonselor(e.target.value)}
              />
              <Inputan 
                type="text" 
                placeholder="Nama User"
                value={NamaUser}
                onChange={(e) => setNamaUser(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-between'>
          <Buttonn 
            className='text-primary bg-white' 
            onClick={handleClose}
            label="Batal"
          />
            
          <Buttonn 
            className='bg-button text-white' 
            onClick={handleClick}
            label="Tambah"
          />
        </Modal.Footer>

      </Modal>

        </>
    )
}
export default ModalEditKonseling