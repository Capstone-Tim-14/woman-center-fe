import React, { useState } from 'react';
import EditKonselingButton from '../../atom/button/EditKonselingButton';
import CloseButton from '../../atom/button/Closebutton';
import '../../../style/EditKonseling.css';

const EditKonseling = ({ showModal, toggleModal }) => {
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

  const handleClose = () => {
    console.log('Closing popup');
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>Edit Konseling</h1>
            < CloseButton handleClose={handleClose} />
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label htmlFor="namaPaket">Keterangan Konseling</label>
                <input type="text" id="namaPaket" name="namaPaket" placeholder="Nama Paket" />
                <input type="text" id="namaKonselor" name="namaKonselor" placeholder="Nama Konselor" />
                <input type="text" id="namaUser" name="namaUser" placeholder="Nama User" />
              </div>
              <div className="flex-container">
                <div className="column">
                <h2 className="sesi-title">Sesi 1</h2>
                  <div>
                    <input type="date" id="tanggalSesi1" name="tanggalSesi1" />
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu1"
                        checked={sesi1Waktu.waktu1}
                        onChange={handleSesi1Change}
                      /> 
                      <p>08:10</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi1Waktu.waktu2}
                        onChange={handleSesi1Change}
                      />
                      <p>09:20</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu3"
                        checked={sesi1Waktu.waktu3}
                        onChange={handleSesi1Change}
                      />
                      <p>10:30</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu4"
                        checked={sesi1Waktu.waktu4}
                        onChange={handleSesi1Change}
                      />
                      <p>13:00</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi1Waktu.waktu5}
                        onChange={handleSesi1Change}
                      />
                      <p>14:10</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu6"
                        checked={sesi1Waktu.waktu6}
                        onChange={handleSesi1Change}
                      />
                      <p>15:20</p>
                    </label>
                  </div>
                </div>
                <div className="column">
                <h2 className="sesi-title">Sesi 2</h2>
                  <div>
                    <input type="date" id="tanggalSesi2" name="tanggalSesi2" />
                  </div>
                  <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu1"
                        checked={sesi2Waktu.waktu1}
                        onChange={handleSesi2Change}
                      /> 
                      <p>08:30</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi2Waktu.waktu2}
                        onChange={handleSesi2Change}
                      />
                      <p>09:20</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu3"
                        checked={sesi2Waktu.waktu3}
                        onChange={handleSesi2Change}
                      />
                      <p>10:30</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu4"
                        checked={sesi1Waktu.waktu4}
                        onChange={handleSesi2Change}
                      />
                      <p>13:00</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi2Waktu.waktu5}
                        onChange={handleSesi2Change}
                      />
                      <p>14:10</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu6"
                        checked={sesi2Waktu.waktu6}
                        onChange={handleSesi2Change}
                      />
                      <p>15:20</p>
                    </label>
                  </div>
                  </div>
                </div>
                <div className="column">
                <h2 className="sesi-title">Sesi 3</h2>
                  <div>
                    <input type="date" id="tanggalSesi3" name="tanggalSesi3" />
                  </div>
                  <div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu1"
                        checked={sesi3Waktu.waktu1}
                        onChange={handleSesi3Change}
                      /> 
                      <p>08:10</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu2"
                        checked={sesi3Waktu.waktu2}
                        onChange={handleSesi3Change}
                      />
                      <p>09:20</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu3"
                        checked={sesi3Waktu.waktu3}
                        onChange={handleSesi3Change}
                      />
                      <p>10:30</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu4"
                        checked={sesi3Waktu.waktu4}
                        onChange={handleSesi3Change}
                      />
                      <p>13:00</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu5"
                        checked={sesi3Waktu.waktu5}
                        onChange={handleSesi3Change}
                      />
                      <p>14:10</p>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="waktu6"
                        checked={sesi3Waktu.waktu6}
                        onChange={handleSesi3Change}
                      />
                      <p>15:20</p>
                    </label>
                  </div>
                  </div>
                </div>
              </div>
              <EditKonselingButton handleCancel={handleCancel} handleSubmit={handleSubmit} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditKonseling;