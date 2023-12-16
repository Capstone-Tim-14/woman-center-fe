import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonsDataKonselor from '../../Atom/button/ButtonsDataKonselor'
import '../../../styles/ModalAlertDataKonselor.css'
import berhasil from '../../../assets/icon/Group.png'

function ModalBerhasilDataKonselor ({Berhasil, Close, label}) {

  return (
    <Modal show={Berhasil} onHide={Close} size="sm">
        <div id='modalAlertDataKonselor'>
            <img src={berhasil}alt="berhasil-data"/>
            <h5>BERHASIL</h5>
            <p>{label}</p>
            <ButtonsDataKonselor label='OK' onClick={Close}/>
        </div>
    </Modal>
  )
}

export default ModalBerhasilDataKonselor