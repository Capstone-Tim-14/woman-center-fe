import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Buttons from '../../atom/button/buttons';
import ButtonClose from '../../atom/button/buttonsClose';

function ModalHapusData (props) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button
      style={{border: 'none', background: 'none'}}
      onClick={handleShow}>
      <img 
        src="src/assets/icons/Delete.png" 
        alt="" 
        style={{width: '16px', height: '18px'}}/>
    </button>

    <Modal 
      show={show} 
      onHide={handleClose}
      size='sm'>
        <div className='container'>
          <div className='row my-3 px-2 gap-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='m-0' style={{fontSize: '14px', fontWeight: '500'}}>Hapus Data?</p>
              <ButtonClose onClick={handleClose}/>
            </div>

            <div 
              className='text-center' 
              style={{fontSize: '11.5px'}}>
              Apakah Anda yakin ingin menghapus data ini?<br/>
              Data yang telah dihapus tidak dapat dikembalikan.
            </div>

            <div className='d-flex justify-content-center gap-2'>
              <Buttons variant="secondary" onclick={handleClose} teks="Batal"/>
              <Buttons variant="primary" onclick={(e) => props.clicked(e)} teks="Hapus"/>
            </div>
          </div>
        </div>

      </Modal>
    </>
  )
}

export default ModalHapusData