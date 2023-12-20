import React from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ButtonHapusDataKonselor from "../../Atom/button/ButtonHapusDataKonselor";
import ButtonCloseDataKonselor from "../../Atom/button/ButtonCloseDataKonselor"
import ButtonsDataKonselor from "../../Atom/button/ButtonsDataKonselor";
import '../../../styles/ModalHapusDataKonselor.css';

const ModalHapus = ({onClick, icons}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }

    return(
        <>

        <ButtonHapusDataKonselor 
          onClick={handleShow} 
          src={icons}
        />

        <Modal 
          show={show} 
          onHide={handleClose} size='sm'>
            <div id="modalHapusDataKonselor">
                <header id="modal-headerEditHapusKonselor" >
                  <Modal.Title 
                      className='fs-6 fw-semibold'>
                      Hapus Data?
                  </Modal.Title>
                  <ButtonCloseDataKonselor 
                      onClick={handleClose}
                   />
                </header>

                <div id="main-contentHapus">
                  <p>
                      Apakah Anda yakin ingin menghapus data ini?<br/>
                      Data yang telah dihapus tidak dapat dikembalikan.
                  </p>
                </div>

                <footer id="modal-footerHapusEditKonselor">
                  <ButtonsDataKonselor 
                      className='text-primary bg-white' 
                      onClick={handleClose}
                      label="Batal"
                  />
                  <ButtonsDataKonselor
                      className='custom-buttons'
                      onClick={onClick}
                      label="Hapus"
                  />
                </footer>
            </div>

        </Modal>

        </>
    )
}
export default ModalHapus