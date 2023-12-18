import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import InputJadwal from '../../Atom/inputan/inputJadwal';
import ImageUp from '../../Molekul/ImageUp';
import TambahAcara from '../../Atom/button/TambahAcara';
import Buttonn from '../../Atom/button/button';
import axios from 'axios';
import { useAuth } from '../../Layout/AuthContext'


const KontenTambahAcara = ({handleClose}) => {
  const { token, logout } = useAuth();
  const [selectedOption, setSelectedOption] = useState('');
  const [showPopup, setShow] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    location: '',
    date: '',
    price: '',
    eventLink: '',
    description: '',
    eventImage: null,
    eventType: '',
  });

  const sendEventDataToAPI = async () => {
    try {
      const response = await axios.post('api-ferminacare.tech/api/v1/admin/event', eventData, {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZnVsbF9uYW1lIjoiYWRtaW4gYWRtaW5BIiwiZW1haWwiOiJhZG1pbkFAZmVybWluYWNhcmUuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzAyNzk1MzAyfQ.x5TkL5hZySKIMpqWS5lLzFiNhg3MfVxb5HTLtIB3EQU',
        },
      });
      console.log('Response from API:', response.data);
      console.log('Response status code:', response.status);
      // ...
    } catch (error) {
      console.error('Error sending data to API:', error.response ? error.response.data : error.message);
      // ...
    }
  };


  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
    setEventData((prevData) => {
      // Check if the value is 'offline' or 'online'
      const eventType = value === 'OFFLINE' || value === 'ONLINE' ? value : '';
  
      return {
        ...prevData,
        eventType: eventType,
      };
    });
  };
  const handleImageSubmit = (data) => {
    setEventData((prevData) => ({
      ...prevData,
      eventImage: data,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openPopup = () => {
    setShow(true);
  };

  const closePopup = () => {
    setShow(false);
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', eventData.title);
      formData.append('locations', eventData.location);
      formData.append('date', eventData.date);
      formData.append('price', eventData.price);
      formData.append('event_url', eventData.eventLink);
      formData.append('description', eventData.description);
      formData.append('poster', eventData.eventImage);
      formData.append('event_Type', eventData.eventType);
      formData.append('status', 'OPEN');
      formData.append('time_start', eventData.time_start || '08:00:00'); // Use actual or default value
      formData.append('time_finish', eventData.time_finish || '17:00:00'); // Use actual or default value
      

      console.log('FormData:', formData);
      const response = await axios.post('https://api-ferminacare.tech/api/v1/admin/event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, 
        },
      });

      console.log('API Response:', response.data);

      closePopup();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-left">
              <h5>Keterangan Acara</h5>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Nama Acara" autoFocus={true} name="title" value={eventData.title} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Lokasi" autoFocus={true} name="location" value={eventData.location} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Tanggal" autoFocus={true} name="date" value={eventData.date} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="number" placeholder="Harga (IDR)" autoFocus={true} name="price" value={eventData.price} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Link Acara" autoFocus={true} name="eventLink" value={eventData.eventLink} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Waktu Mulai" autoFocus={true} name="time_start" value={eventData.time_start} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <InputJadwal type="text" placeholder="Waktu Selesai" autoFocus={true} name="time_finish" value={eventData.finish} onChange={handleInputChange} />
              </div>
              <div>
                <h5>Tipe Acara</h5>
                <div className="d-flex gap-2  ">
                <Form.Check
                    type="checkbox"
                    label="Offline"
                    name="checkboxGroup"
                    checked={eventData.eventType === 'OFFLINE'}
                    onChange={() => handleCheckboxChange('OFFLINE')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Online"
                    name="checkboxGroup"
                    checked={eventData.eventType === 'ONLINE'}
                    onChange={() => handleCheckboxChange('ONLINE')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{marginLeft: '100px', width: '300px', height: '300px'}}>
              <h5 style={{marginLeft: '40px'}}>Poster Acara </h5>
              <ImageUp onImageChange={handleImageSubmit} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <h5 style={{marginLeft: '150px'}}>Deskripsi Acara</h5>
          </div>
          <div className="m-4">
            <Form.Control as="textarea" placeholder="Deskripsi" rows={4} name="description" value={eventData.description} onChange={handleInputChange} style={{ backgroundColor: "#EFF1F999 ", width: "80%", height: "271px", marginLeft: "130px" }} />
          </div>
          <div className="p-3" >
            <div className='d-flex gap-2 justify-content-end'>
               <Buttonn
                  className={"bg-white text-primary "}
                  label="Batal"
                  onClick={handleClose}
                />
              <Buttonn
                  className={"bg-button"}
                  label="Tambah"
                  onClick={handleFormSubmit}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontenTambahAcara;
