import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import InputJadwal from '../../Atom/inputan/inputJadwal';
import ImageUp from '../../Molekul/ImageUp';
import Buttonn from '../../Atom/button/button';
import "../../../styles/modalAcara.css";
import Tambah from '../../Atom/button/Tambah';
import axios from 'axios';
const KontenTambahAcara = () => {

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
    setEventData((prevData) => ({
      ...prevData,
      eventType: value,
    }));
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

  const handleFormSubmit = () => {
    const formData = {
      title: eventData.title,
      location: eventData.location,
      date: eventData.date,
      price: eventData.price,
      eventLink: eventData.eventLink,
      description: eventData.description,
      eventImage: eventData.eventImage,
      eventType: eventData.eventType,
    };
    sendEventDataToAPI();
    console.log(formData);
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
              <div>
                <h5>Tipe Acara</h5>
                <div className="d-flex gap-2  ">
                  <Form.Check
                    type="checkbox"
                    label="Offline"
                    name="checkboxGroup"
                    checked={eventData.eventType === 'offline'}
                    onChange={() => handleCheckboxChange('offline')}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Online"
                    name="checkboxGroup"
                    checked={eventData.eventType === 'online'}
                    onChange={() => handleCheckboxChange('online')}
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
                className={"bg-button"}
                label="Tambah"
                // onClick nya diisi sesuai kondisi
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
