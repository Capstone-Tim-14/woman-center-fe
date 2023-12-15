import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonsDataKonselor from '../../atom/button/ButtonsDataKonselor'
import '../../../style/ModalAlertDataKonselor.css'

function ModalBerhasilDataKonselor({Berhasil, Close, label}) {

  return (
    <Modal show={Berhasil} onHide={Close} size="sm">
        <div id='modalAlertDataKonselor'>
            <img src="src/assets/icons/Group.png" alt="berhasil-data"/>
            <h5>BERHASIL</h5>
            <p>{label}</p>
            <ButtonsDataKonselor label='OK' onClick={Close}/>
        </div>
    </Modal>
  )
}

export default ModalBerhasilDataKonselor