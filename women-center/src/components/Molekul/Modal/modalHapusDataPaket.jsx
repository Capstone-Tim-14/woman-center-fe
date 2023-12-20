import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Buttons from '../../Atom/button/buttonsPaket';
import ButtonClose from '../../Atom/button/buttonsClosePaket';
import image from '../../../assets/icon/Delete.png';

function ModalHapusData (props) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button
      id='btn-hapusPaket'
      style={{border: 'none', background: 'none'}}
      onClick={handleShow}>
      <img 
        src={image} 
        alt="" 
        style={{width: '16px', height: '18px'}}/>
    </button>

    <div id='modal-HapusPaket'>
      <Modal 
        show={show} 
        onHide={handleClose}
        size='sm'
        style={{width: '500px', marginLeft: '450px'}}
        >
          
          <div className='container' id='container-modalHapusPaket'>
            <div className='row my-3 px-2 gap-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='m-0' style={{fontSize: '14px', fontWeight: '500'}}>Hapus Data?</p>
                <ButtonClose onClick={handleClose}/>
              </div>
              <div 
                id='text-modalHapusPaket'
                className='text-center' 
                style={{fontSize: '11.5px'}}>
                Apakah Anda yakin ingin menghapus data ini?<br/>
                Data yang telah dihapus tidak dapat dikembalikan.
              </div>

              <div className='d-flex justify-content-center gap-2' id='button-modalHapusPaket'>
                <Buttons variant="secondary" onclick={handleClose} teks="Batal" id="buttonBatalPaket"/>
                <Buttons variant="primary" onclick={(e) => props.clicked(e)} teks="Hapus" id="buttonHapusPaket"/>
              </div>
            </div>
          </div>

        </Modal>
      </div>
    </>
  )
}

export default ModalHapusData