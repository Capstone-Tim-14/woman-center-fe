import React, { useState } from 'react';
import '../../../style/TambahPaket.css';
import CloseButton from '../../atom/button/Closebutton';
import Batal from '../../atom/button/Batal';
import Tambah from '../../atom/button/Tambah';
import  Modal  from 'react-bootstrap/Modal';

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
        id='btn-tambah-paket'
        className='rounded-2 px-3'
        style={{
          fontSize: '14px',
          borderRadius: '4px',
          border: 'none',
          height: '30px',
          fontWeight: '600',
          fontFamily: 'Raleway, sans-serif',
          backgroundImage: 'linear-gradient(to right, #FD8BA3 0%, #FF5BCD 100%)', // Ganti warna gradasi sesuai keinginan Anda
          color: 'white', // Ubah warna teks agar sesuai dengan latar belakang yang digunakan
        }}
      onClick={handleShowPaket}
    >
      + Buat Paket
    </button>
      
      <div id='modal-tambah-paket'>
        <Modal show={show} onHide={handleClosePaket} size='lg'>
          <div className="modal-overlay" id='overlay-tambahpaket'>
            <div className="popup" id='popup-tambahpaket'>
              <div className="popup-header" id='popup-header-tambahpaket'>
                <h2>Tambah Paket</h2>
                <CloseButton id='close-button-paket' handleClose={handleClosePaket}/>
              </div>
              <form className="popup-content" id='popup-content-tambahpaket'>
                <div className="form-container" id='form-container-tambahpaket'>
                  <div id='left-column-tambahpaket' className='col-6'>
                    <div id="form-group-namapaket">
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
                    <div id="form-group-harga" className='d-flex flex-column'>
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
                    <div id="form-group-tipepaket">
                    <label>Tipe Paket</label>
                      <div id="tipe-paket-options">
                        <div id='checkbox-satu'>
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
                        <div id='checkbox-dua'>
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

                  <div id="right-column" className='col-6'>
                    <div id="benefits-section">
                      <label style={{ marginLeft: '30px' }}>Benefit Paket</label>
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
                </div>
              </form>
              <div id="button-section-paket">
                <Batal 
                  id='btn-batalPaket'
                  handleClose={handleClosePaket} />
                <Tambah 
                  id="btn-TambahPaket" 
                  handleSubmit={handleSubmit} />
              </div>
            </div>
            </div>
        </Modal>
      </div>
      </>
    )
}
export default TambahPaket;
