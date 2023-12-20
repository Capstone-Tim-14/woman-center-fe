import React, { useState } from 'react';
import EditKonselingButton from '../../Atom/button/EditKonselingButton';
import IconEditKonselingJadwal from '../../../assets/icon/edit_konseling.svg'
import CloseButton from '../../Atom/button/Closebutton';
import Modal from 'react-bootstrap/Modal'
import '../../../styles/EditKonseling.css';

const EditKonseling = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [keterangan, setKeterangan] = useState({
    namaPaket: '',
    namaKonselor: '',
    namaUser: ''
  });

  const [sesi1Waktu, setSesi1Waktu] = useState({
    waktu1: false,
    waktu2: false,
    waktu3: false,
    waktu4: false,
    waktu5: false,
    waktu6: false,
  });

  const [sesi2Waktu, setSesi2Waktu] = useState({
    waktu1: false,
    waktu2: false,
    waktu3: false,
    waktu4: false,
    waktu5: false,
    waktu6: false,
  });

  const [sesi3Waktu, setSesi3Waktu] = useState({
    waktu1: false,
    waktu2: false,
    waktu3: false,
    waktu4: false,
    waktu5: false,
    waktu6: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Data Paket:', { keterangan, sesi1Waktu, sesi2Waktu, sesi3Waktu });

    setKeterangan({
      namaPaket: '',
      namaKonselor: '',
      namaUser: ''
    });

    setSesi1Waktu({
      waktu1: false,
      waktu2: false,
      waktu3: false,
      waktu4: false,
      waktu5: false,
      waktu6: false,
    });

    setSesi2Waktu({
      waktu1: false,
      waktu2: false,
      waktu3: false,
      waktu4: false,
      waktu5: false,
      waktu6: false,
    });

    setSesi3Waktu({
      waktu1: false,
      waktu2: false,
      waktu3: false,
      waktu4: false,
      waktu5: false,
      waktu6: false,
    });

    toggleModal();
  };

  const handleCancel = () => {
    console.log('Canceling action');
    handleClose(); // Jika diperlukan, tambahkan logika lainnya untuk pembatalan
  };


  const handleSesi1Change = (event) => {
    const { name, checked } = event.target;
    setSesi1Waktu({ ...sesi1Waktu, [name]: checked });
  };

  const handleSesi2Change = (event) => {
    const { name, checked } = event.target;
    setSesi2Waktu({ ...sesi2Waktu, [name]: checked });
  };

  const handleSesi3Change = (event) => {
    const { name, checked } = event.target;
    setSesi3Waktu({ ...sesi3Waktu, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setKeterangan({ ...keterangan, [name]: value });
  };

  return (
    <>
      <button style={{border: 'none', background: 'none'}} onClick={handleShow}>
        <img src={IconEditKonselingJadwal} alt=""style={{width: '10px', height: '18px', marginLeft: '180px', marginTop: '-30px', display: 'flex'}}/>
      </button>
      <div id='modal-editKonseling'>
          <Modal show={show} onHide={handleClose} size='lg'>
          <div className="modal-konseling">
            <div className="modal-content-konseling">
              <div className='d-flex justify-content-between align-items-center'>
                <h1>Edit Konseling</h1>
                <CloseButton id='btn-closeKonseling' handleClose={handleClose}/>
              </div>
              <form onSubmit={handleSubmit} className="form-container-konseling">
                <div className="form-group-konseling" style={{gap: '3px'}}>
                  <label htmlFor="namaPaket">Keterangan Konseling</label>
                  <input type="text" id="namaPaket" name="namaPaket" placeholder="Nama Paket" className='np'/>
                  <input type="text" id="namaKonselor" name="namaKonselor" placeholder="Nama Konselor" className='nk'/>
                  <input type="text" id="namaUser" name="namaUser" placeholder="Nama User" className='nu'/>
                </div>
                <div className="flex-container-konseling">
                  <div className="column">
                  <h2 className="sesi-title">Sesi 1</h2>
                    <div>
                      <input type="date" id="tanggalSesi1" name="tanggalSesi1" />
                    </div>
                    <div className='checkbox-sesiPertama'>
                      <label className="checkbox-label-sesi">
                        <input
                          type="checkbox"
                          name="waktu1"
                          checked={sesi1Waktu.waktu1}
                          onChange={handleSesi1Change}
                          /> 
                        <p className="checkbox-text-sesi">08:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                        <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi1Waktu.waktu2}
                        onChange={handleSesi1Change}
                        /> 
                        <p className="checkbox-text-sesi">09:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                        <input
                          type="checkbox"
                          name="waktu3"
                          checked={sesi1Waktu.waktu3}
                          onChange={handleSesi1Change}
                          /> 
                        <p className="checkbox-text-sesi">10:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                        <input
                          type="checkbox"
                          name="waktu4"
                          checked={sesi1Waktu.waktu4}
                          onChange={handleSesi1Change}
                          /> 
                        <p className="checkbox-text-sesi">13:00</p>
                      </label>
                      <label className="checkbox-label-sesi">
                        <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi1Waktu.waktu5}
                        onChange={handleSesi1Change}
                        /> 
                        <p className="checkbox-text-sesi">14:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                        <input
                          type="checkbox"
                          name="waktu6"
                          checked={sesi1Waktu.waktu6}
                          onChange={handleSesi1Change}
                          /> 
                        <p className="checkbox-text-sesi">15:20</p>
                      </label>
                    </div>
                  </div>
    
                  <div className="column">
                  <h2 className="sesi-title">Sesi 2</h2>
                    <div>
                      <input type="date" id="tanggalSesi2" name="tanggalSesi2" />
                    </div>
                    <div className='checkbox-sesiKedua'>
                    <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu1"
                        checked={sesi2Waktu.waktu1}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">08:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi2Waktu.waktu2}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">09:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu3"
                        checked={sesi2Waktu.waktu3}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">10:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu4"
                        checked={sesi2Waktu.waktu4}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">13:00</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi2Waktu.waktu5}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">14:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu6"
                        checked={sesi2Waktu.waktu6}
                        onChange={handleSesi2Change}
                        /> 
                    <p className="checkbox-text-sesi">15:20</p>
                      </label>
                    </div>
                  </div>
                  <div className="column">
                  <h2 className="sesi-title">Sesi 3</h2>
                    <div>
                      <input type="date" id="tanggalSesi3" name="tanggalSesi3" />
                    </div>
                    <div className='checkbox-sesiKetiga'>
                    <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu1"
                        checked={sesi3Waktu.waktu1}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">08:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi3Waktu.waktu2}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">09:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu3"
                        checked={sesi3Waktu.waktu3}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">10:30</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu4"
                        checked={sesi3Waktu.waktu4}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">13:00</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi3Waktu.waktu5}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">14:10</p>
                      </label>
                      <label className="checkbox-label-sesi">
                      <input
                        type="checkbox"
                        name="waktu6"
                        checked={sesi3Waktu.waktu6}
                        onChange={handleSesi3Change}
                        /> 
                    <p className="checkbox-text-sesi">15:20</p>
                      </label>
                    </div>
                  </div> 
                </div>
                <EditKonselingButton handleCancel={handleCancel} handleSubmit={handleSubmit} />
                </form>
            </div>
          </div>
        </Modal>
        </div>
     </>
  );
};

export default EditKonseling;