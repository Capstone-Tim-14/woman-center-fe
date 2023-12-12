import React, { useState } from 'react';
import '../../../style/EditPaket.css';
import Batal from '../../atom/button/Batal';
import Simpan from '../../atom/button/Simpan';
import CloseButton from '../../atom/button/Closebutton';
import Modal from 'react-bootstrap/Modal'

const EditPaket = ({ isOpen, togglePopup }) => {
  const [namaPaket, setNamaPaket] = useState('');
  const [hargaNominal, setHargaNominal] = useState('');
  const [hargaSatuan, setHargaSatuan] = useState('');
  const [jumlahSesi, setJumlahSesi] = useState('');
  const [durasi, setDurasi] = useState('');
  const [selectedTipePaket, setSelectedTipePaket] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  
  return (
    <>
      <button
        style={{border: 'none', background: 'none'}}
        onClick={handleShow}>
        <img 
          src="src/assets/icons/Edit Square.png" 
          alt="" 
          style={{width: '16px', height: '18px'}}/>
      </button>
      
      <div id='modal-edit-paket'>
        <Modal show={show} onHide={handleClose}>
        <div id="modal-overlay-edit">
          <div id="popup-editPaket">
            <div id="popup-headerEdit">
              <h2>Edit Paket</h2>
              < CloseButton id='btn-close-editPaket' handleClose={handleClose} />
            </div>
            <form id="popup-contentEdit">
                <div id="form-containerEdit">
                  <div id="left-column" className='col-6'>
                    <div id="form-group-editnamapaket">
                      <label htmlFor="namaPaket">Nama Paket</label>
                      <input
                        type="text"
                        id="namaPaket"
                        value={namaPaket}
                        onChange={handleNamaPaketChange}
                        placeholder="Nama Paket"
                        className='nama-paket'
                      />
                    </div>
                    <div id="form-group-editharga">
                      <label htmlFor="hargaNominal">Harga</label>
                      <input
                        type="text"
                        id="hargaNominal"
                        value={hargaNominal}
                        onChange={handleHargaNominalChange}
                        placeholder="Harga (IDR)"
                        className='harga'
                      />          
                      <input
                        type="text"
                        id="hargaSatuan"
                        value={hargaSatuan}
                        onChange={handleHargaSatuanChange}
                        placeholder="Harga Display (IDR)"
                        className='harga-display'
                      />
                    </div>
                    {/* Tipe Paket Section */}
                    <div id="form-group-edittipepaket">
                    <label id='tipe-paket'>Tipe Paket</label>
                      <div id="tipe-paket-options">
                        <div id="checkbox-satu">
                          <label>
                            <input
                              type="checkbox"
                              value="Video Call"
                              checked={selectedTipePaket === 'Video Call'}
                              onChange={handleTipePaketChange}
                              style={{ marginRight: '10px' }} // Style untuk menyesuaikan jarak antara checkbox dan teks
                              className='video-call'
                            />
                            Video Call
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Chat"
                              checked={selectedTipePaket === 'Chat'}
                              onChange={handleTipePaketChange}
                              style={{ marginRight: '10px' }} // Style untuk menyesuaikan jarak antara checkbox dan teks
                              className='chat'
                            />
                            Chat
                          </label>
                        </div>
                        <div id="checkbox-dua">
                          <label>
                            <input
                              type="checkbox"
                              value="Voice Call"
                              checked={selectedTipePaket === 'Voice Call'}
                              onChange={handleTipePaketChange}
                              style={{ marginRight: '10px' }} // Style untuk menyesuaikan jarak antara checkbox dan teks
                              className='voice-call'
                            />
                            Voice Call
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Langsung"
                              checked={selectedTipePaket === 'Langsung'}
                              onChange={handleTipePaketChange}
                              style={{ marginRight: '10px' }} // Style untuk menyesuaikan jarak antara checkbox dan teks
                              className='langsung'
                            />
                            Langsung
                          </label>
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
                        className='jumlah-sesi'
                      />
                      <input
                        type="number"
                        id="durasi"
                        value={durasi}
                        onChange={handleDurasiChange}
                        placeholder="Durasi(Menit)"
                        className='durasi'
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div id="right-column" className='col-6'>
                    <div id="benefits-section-edit">
                      <label>Benefit Paket</label>
                      <ul>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-1"
                      />
                      <label htmlFor="static-checkbox-1">Durasi Konsultasi 1Jam/Sesi</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-2"
                      />
                      <label htmlFor="static-checkbox-2">1on1 Dengan Konselor</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-3"
                      />
                      <label htmlFor="static-checkbox-3">Privasi Dijamin 100% Aman</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-4"
                      />
                      <label htmlFor="static-checkbox-4">Tes Kesehatan Mental</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-5"
                      />
                      <label htmlFor="static-checkbox-5">Tes Kepribadian</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-6"
                      />
                      <label htmlFor="static-checkbox-6">Tes Minat Karir</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-7"
                      />
                      <label htmlFor="static-checkbox-7">Langsung Bertemu Psikolog & Konseling Tatap Muka</label>
                      </li>
                      <li>
                      <input
                        type="checkbox"
                        id="static-checkbox-8"
                      />
                      <label htmlFor="static-checkbox-8">Ruang Konseling Yang Nyaman & Aman</label>
                      </li>
                      {checkboxes.map((checkbox, index) => (
                        <li key={index}>
                          <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            className='checkbox-dynamic'
                          />
                          <label htmlFor={`checkbox-${index}`}>{`Checkbox ${index + 1}`}</label>
                        </li>
                          ))}
                        </ul>
                      <button type="button" onClick={handleAddCheckbox}>
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
              </form>
            <div id="button-editPaket">
              <Batal id='batal-editPaket' handleClose={handleClose}/>
              <Simpan handleSubmit={handleSubmit}/>
            </div>
          </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EditPaket;
