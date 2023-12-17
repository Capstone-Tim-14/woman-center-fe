import React, { useState } from 'react';
import '../../../styles/TambahPaket.css';
import CloseButton from '../../Atom/button/Closebutton';
import Batal from '../../Atom/button/Batal';
import Tambah from '../../Atom/button/Tambah';
import  Modal  from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FormCheck } from 'react-bootstrap';

const TambahPaket = ({  togglePopup }) => {
  const [namaPaket, setNamaPaket] = useState('');
  const [hargaNominal, setHargaNominal] = useState('');
  const [hargaSatuan, setHargaSatuan] = useState('');
  const [jumlahSesi, setJumlahSesi] = useState('');
  const [durasi, setDurasi] = useState('');
  const [selectedTipePaket, setSelectedTipePaket] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);

  const [show, setShow] = useState(false);
  const handleClosePaket = () => setShow(false);
  const handleShowPaket = () => setShow(true);

  const handleNamaPaketChange = (e) => {
    setNamaPaket(e.target.value);
  };

  const handleHargaNominalChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]+/g, '');
    setHargaNominal(newValue);
  };

  const handleHargaSatuanChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]+/g, '');
    setHargaSatuan(newValue);
  };

  const handleJumlahSesiChange = (e) => {
    const newJumlahSesi = Math.max(0, e.target.value);
    setJumlahSesi(newJumlahSesi);
  };

  const handleDurasiChange = (e) => {
    const newDurasi = Math.max(0, e.target.value);
    setDurasi(newDurasi);
  };

  const handleTipePaketChange = (e) => {
    const selectedTipe = e.target.value;
    setSelectedTipePaket(selectedTipe);
  };

  const handleNewBenefitChange = (e) => {
    setNewBenefit(e.target.value);
  };

  const handleAddCheckbox = () => {
    if (newBenefit.trim() !== '') {
      setCheckboxes([...checkboxes, newBenefit.trim()]);
      setNewBenefit('');
    }
  };

  const handleSubmit = () => {
    console.log('Data Paket:', { namaPaket, hargaNominal, hargaSatuan, selectedTipePaket, jumlahSesi, durasi, checkboxes });

    setNamaPaket('');
    setHargaNominal('');
    setHargaSatuan('');
    setSelectedTipePaket('');
    setJumlahSesi('');
    setDurasi('');
    setCheckboxes([]);

    if (typeof togglePopup === 'function') {
      togglePopup();
    }
  };

  const handleClose = () => {
    console.log('Closing popup');
    if (typeof togglePopup === 'function') {
      togglePopup();
    } else {
      console.error('togglePopup is not a function:', togglePopup);
    }
  };
  
  return (
      <>
      <button
        style={{border: 'none', background: 'none'}}
        onClick={handleShowPaket}>
        <img 
          src="src/assets/icon/Edit Square.png" 
          alt="" 
          style={{width: '16px', height: '18px'}}/>
      </button>
      
        <Modal show={show} onHide={handleClosePaket} size='md'>
              <header id='popup-header-tambahpaket' 
                  className='d-flex justify-content-between align-items-center'>
                <h5>Edit Paket</h5>
                <CloseButton id='close-button-paket' handleClose={handleClosePaket}/>
              </header>

              <main>
                <Form id='popup-content-tambahpaket' className='d-flex justify-content-between'>
                    <div id='left-column-tambahpaket' className='col-6'>
                      <div id="form-group-namapaket">
                        <label htmlFor="namaPaket">Nama Paket</label>
                        <input
                          type="text"
                          id="namaPaket"
                          value={namaPaket}
                          onChange={handleNamaPaketChange}
                          placeholder="Nama Paket"
                        />
                      </div>
                      <div id="form-group-harga" className='d-flex flex-column'>
                        <label htmlFor="hargaNominal">Harga</label>
                        <input
                          type="text"
                          id="hargaNominal"
                          value={hargaNominal}
                          onChange={handleHargaNominalChange}
                          placeholder="Harga (IDR)"
                        />          
                        <input
                          type="text"
                          id="hargaSatuan"
                          value={hargaSatuan}
                          onChange={handleHargaSatuanChange}
                          placeholder="Harga Display (IDR)"
                        />
                      </div>
                      {/* Tipe Paket Section */}
                      <div id="form-group-tipepaket">
                      <label>Tipe Paket</label>

                        <div className='d-flex gap-3'>

                          <div className='d-flex flex-column gap-2'>
                            <FormCheck
                              type="checkbox"
                              label="Video Call"
                              id='static-checkbox-paket'
                            />
                            <FormCheck
                              type="checkbox"
                              label="Chat"
                              id='static-checkbox-paket'
                            />
                          </div>
                          <div className='d-flex flex-column gap-2'>
                            <FormCheck
                              type="checkbox"
                              label="Voice Call"
                              id='static-checkbox-paket'
                            />
                            <FormCheck
                              type="checkbox"
                              label="Langsung"
                              id='static-checkbox-paket'
                            />
                          </div>

                        </div>

                      </div>
                      {/* Jumlah Sesi and Durasi Sections */}
                      <div id="form-group-rincianpaket">
                        <label htmlFor="jumlahSesi">Rincian Paket</label>
                        <input
                          type="number"
                          id="jumlahSesi"
                          value={jumlahSesi}
                          onChange={handleJumlahSesiChange}
                          placeholder="Jumlah Sesi"
                        />
                        <input
                          type="number"
                          id="durasi"
                          value={durasi}
                          onChange={handleDurasiChange}
                          placeholder="Durasi(Menit)"
                        />
                      </div>
                    </div>

                    <div id="right-column" className='col-6'>
                      <div id="benefits-section">
                        <label>Benefit Paket</label>
                         <div className='d-flex flex-column gap-3'>
                            <FormCheck
                                type="checkbox"
                                label="1on1 Dengan Konselor"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Privasi Dijamin 100% Aman"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Tes Kesehatan Mental"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Tes Kepribadian"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Tes Minat Karir"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Langsung Bertemu Psikolog & Konseling Tatap Muka"
                                id='static-checkbox-paket'
                              />
                            <FormCheck
                                type="checkbox"
                                label="Ruang Konseling Yang Nyaman & Aman"
                                id='static-checkbox-paket'
                              />
                          {checkboxes.map((checkbox, index) => (
                              <FormCheck
                                key={index}
                                label={`Checkbox ${index + 1}`}
                                type="checkbox"
                                id={`checkbox-${index}`}
                                className='d-flex'
                              />
                              ))}
                         </div>

                        <div id='new-benefit'>
                          <button 
                            id='add-benefit'
                            type="button" 
                            onClick={handleAddCheckbox}>
                            +
                          </button>
                          <input
                            type="text"
                            id="newBenefit"
                            value={newBenefit}
                            onChange={handleNewBenefitChange}
                            placeholder="Tambah lainnya"
                          />
                        </div>
                      </div>
                    </div>
                </Form>
              </main>

              <footer id='modal-footerEditPaket'>
                <div id="button-section-paket">
                  <Batal 
                    id='btn-batalPaket'
                    handleClose={handleClosePaket} />
                  <Tambah 
                    id="btn-TambahPaket" 
                    handleSubmit={handleSubmit} />
                </div>
              </footer>
        </Modal>
      </>
    )
}
export default TambahPaket;
