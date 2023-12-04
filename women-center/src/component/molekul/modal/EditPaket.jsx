import React, { useState } from 'react';
import '../style/TambahPaket.css';
import Batal from '../../atom/button/Batal';
import Simpan from '../../atom/button/Simpan';
import CloseButton from '../../atom/button/Closebutton';

const EditPaket = ({ isOpen, togglePopup }) => {
  const [namaPaket, setNamaPaket] = useState('');
  const [hargaNominal, setHargaNominal] = useState('');
  const [hargaSatuan, setHargaSatuan] = useState('');
  const [jumlahSesi, setJumlahSesi] = useState('');
  const [durasi, setDurasi] = useState('');
  const [selectedTipePaket, setSelectedTipePaket] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);

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
    isOpen && (
      <div className="modal-overlay">
        <div className="popup">
          <div className="popup-header">
            <h2>Edit Paket</h2>
            < CloseButton handleClose={handleClose} />
          </div>
          <form className="popup-content">
            <div className="form-container">
              <div className="left-column">
                <div className="form-group">
                  <label htmlFor="namaPaket">Nama Paket</label>
                  <input
                    type="text"
                    id="namaPaket"
                    value={namaPaket}
                    onChange={handleNamaPaketChange}
                    placeholder="Nama Paket"
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <label>Tipe Paket</label>
                  <div className="tipe-paket-options d-flex">
                    <div className="d-flex flex-column">
                      <label>
                        <input
                          type="checkbox"
                          value="Video Call"
                          checked={selectedTipePaket === 'Video Call'}
                          onChange={handleTipePaketChange}
                        />
                        Video Call
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Chat"
                          checked={selectedTipePaket === 'Chat'}
                          onChange={handleTipePaketChange}
                        />
                        Chat
                      </label>
                    </div>
                    <div className="d-flex flex-column">
                      <label>
                        <input
                          type="checkbox"
                          value="Voice Call"
                          checked={selectedTipePaket === 'Voice Call'}
                          onChange={handleTipePaketChange}
                        />
                        Voice Call
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="Langsung"
                          checked={selectedTipePaket === 'Langsung'}
                          onChange={handleTipePaketChange}
                        />
                        Langsung
                      </label>
                    </div>
                  </div>
                </div>
                {/* Jumlah Sesi and Durasi Sections */}
                <div className="form-group">
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
              <div className="right-column">
                  <div className="benefits-section">
                    <label>Benefit Paket</label>
                    <ul>
                    <li>
                    <input
                      type="checkbox"
                      id="static-checkbox-1"
                    />
                    <label htmlFor="static-checkbox-1">Durasi KOnsultasi 1Jam/Sesi</label>
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
          <div className="button">
            <Batal handleClose={handleClose} />
            <Simpan handleSubmit={handleSubmit} />
          </div>
        </div>
        </div>
    )
  );
};

export default EditPaket;
