import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonTambah from '../atom/buttonTambahAkun';
import ButtonClose from '../atom/buttonClose';
import Inputan from '../atom/inputan';
import Buttonn from '../atom/button';


const ButtonModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

      <ButtonTambah onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} size="sm">

        <Modal.Header >
          <Modal.Title>Tambah User</Modal.Title>
          <ButtonClose onClick={handleClose}/>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 " controlId="Nama">
              <Inputan 
                type="text" 
                placeholder="Nama"
                autoFocus={true}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
              <Inputan 
                type="email" 
                placeholder="Email Akun"
              />
            </Form.Group>

            <Form.Group controlId="Password">
              <Inputan 
                type="password" 
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <div className='col-12'>
        <Modal.Footer className='d-flex justify-content-between'>
          <Buttonn 
            className='text-primary bg-white col-5' 
            onClick={handleClose}
            label="Batal"
          />
            
          <Buttonn 
            className='bg-button text-white col-5' 
            onClick={handleClose}
            label="Tambah"
          />
        </Modal.Footer>
        </div>

      </Modal>

        </>
    )
}
export default ButtonModal