import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonHapus from "../atom/buttonHapus";
import ButtonClose from "../atom/buttonClose";
import Buttonn from "../atom/button";
import {RiDeleteBinLine} from 'react-icons/ri'

const ModalHapus = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

      <ButtonHapus 
        onClick={handleShow} 
        icon={<RiDeleteBinLine className='text-danger'/>}
      />

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="sm">

            <div className='container'>

              <header className='d-flex justify-content-between align-items-center mt-3' >
                <Modal.Title 
                    className='fs-6'>
                    Hapus Data?
                </Modal.Title>
                <ButtonClose 
                    onClick={handleClose}/>
              </header>

              <div className='text-center mt-3'>
                <p
                    style={{fontSize: '12px'}}>
                    Apakah Anda yakin ingin menghapus data ini?<br/>
                    Data yang telah dihapus tidak dapat dikembalikan.
                    <p  className='text-secondary'
                        style={{fontSize: '8px'}}> 
                        Nggak kaya masalalu kamu yang meskipun udah usaha<br/>
                        dihapus tapi tetep balik terus</p>
                </p>
              </div>

              <footer className='d-flex justify-content-center gap-3 mb-3'>
                <Buttonn 
                    className='text-primary bg-white col-5' 
                    onClick={handleClose}
                    label="Batal"
                />
                    
                <Buttonn 
                    className='bg-button text-white col-5' 
                    onClick={handleClose}
                    label="Hapus"
                />
              </footer>
            </div>

      </Modal>

        </>
    )
}
export default ModalHapus