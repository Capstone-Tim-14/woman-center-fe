// Karir.jsx

import React, { useState } from 'react';
import './Karir.css';

const Karir = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  console.log('isModalOpen:', isModalOpen);

  return (
    <div>
      <button onClick={openModal}>Buka Modal</button>

      {isModalOpen && (
        <div className="modal show">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Isi dari modal box di sini...</h2>

            {/* Image 1 */}
            <img
              src={('./src/assets/gambar/p2.jpg')}
              alt="Image 1"
              style={{
                width: '154px',
                height: '154px',
                flexShrink: 0,
                borderRadius: '12px',
                border: '1px solid #C7C7C7',
              }}
            />

            <div className="form-container">
              {/* Form 1 and 2 */}
              <div className="horizontal-forms">
                <form className="styled-form">
                  <div>
                    <label>Nama Karier:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>

                <form className="styled-form">
                  <div>
                    <label>Nama Perusahaan:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>
              </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
              <div className="horizontal-forms">
                <form className="styled-form">
                  <div>
                    <label>Tanggal Di Tambahkan:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>

                <form className="styled-form">
                  <div>
                    <label>Ukuran Perusahaan dan Departement:</label><br/>
                    <input type="text" />
                  </div>
                  {/* Add more form fields as needed */}
                </form>
            </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>Skill Requirement:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>

                    <form className="styled-form">
                    <div>
                        <label>Lokasi:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>Url Linkedin:</label><br/>
                        <input type="text" />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
            </div>

            <div className="form-container">
              {/* Form 3 and the rest */}
                <div className="horizontal-forms">
                    <form className="styled-form">
                    <div>
                        <label>About The Job:</label><br/>
                        <input type="text"  style={{ height: '146px'}}/>
                    </div>
                    {/* Add more form fields as needed */}
                    </form>

                    <form className="styled-form">
                    <div>
                        <label>About The Companyyy:</label><br/>
                        <input type="text"  style={{ height: '146px'}} />
                    </div>
                    {/* Add more form fields as needed */}
                    </form>
                </div>
            </div>
        </div>
    </div>
        
    )}
    </div>
  );
};

export default Karir;
