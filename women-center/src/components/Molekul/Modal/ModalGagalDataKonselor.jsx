import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor'
import '../../../styles/modalAlertDataKonselor.css'

function ModalGagalDataKonselor({Gagal, Close, label}) {
  return (
    <Modal show={Gagal} onHide={Close} size="sm">
        <div id='modalAlertDataKonselor'>
            <img src="src/assets/icons/Group2.png" alt="gagal-data"/>
            <h5>GAGAL</h5>
            <p>{label}</p>
            <ButtonsDataKonselor label='OK' onClick={Close}/>
        </div>
    </Modal>
  )
}

export default ModalGagalDataKonselor