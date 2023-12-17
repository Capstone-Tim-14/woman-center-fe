import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor'
import '../../../styles/modalAlertDataKonselor.css'
import image from '../../../assets/icon/Group2.png'

function ModalGagalDataKonselor({Gagal, Close, label}) {
  return (
    <Modal show={Gagal} onHide={Close} size="sm">
        <div id='modalAlertDataKonselor'>
            <img src={image} alt="gagal-data"/>
            <h5>GAGAL</h5>
            <p>{label}</p>
            <ButtonsDataKonselor label='OK' onClick={Close}/>
        </div>
    </Modal>
  )
}

export default ModalGagalDataKonselor