// import Inputan from "../Component/inputan";
// import ImageUploadAdd from "../Component/imageUploadAdd";
import Inputans from '../../Atom/inputan/inputans';
import ImageUp from '../../Molekul/ImageUp';
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Buttonn from '../../Atom/button/button';
// import { getEventById, updateEvent } from './api'; // Sesuaikan dengan fungsi API yang sesuai

const KontenEditAcara = ({ eventId }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [showPopup, setShow] = useState(false);

    const [eventData, setEventData] = useState({
        // Inisialisasi data acara dengan nilai awal atau kosong
        title: '',
        location: '',
        date: '',
        price: '',
        eventLink: '',
        description: '',
        eventImage: null,
        eventType: '',
    });
    useEffect(() => {
        // Ambil data acara berdasarkan ID saat komponen dimuat
        const fetchData = async () => {
            try {
                const event = await getEventById(eventId); // Gantilah dengan fungsi yang sesuai
                setEventData(event);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchData();
    }, [eventId]);

    const handleCheckboxChange = (value) => {
        setSelectedOption(value);
        setEventData((prevData) => ({
            ...prevData,
            eventType: value,
        }));
    };

    const handleImageChange = (image) => {
        setEventData((prevData) => ({
            ...prevData,
            eventImage: image,
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
        // Lakukan pengiriman data ke backend untuk memperbarui acara
        try {
          updateEvent(eventData); // Gantilah dengan fungsi yang sesuai
          console.log('Event updated successfully:', eventData);
          // Redirect atau lakukan tindakan lain setelah pembaruan berhasil
        } catch (error) {
          console.error('Error updating event:', error);
          // Handle error, mungkin menampilkan pesan kesalahan kepada pengguna
        }
      };

    return (
        <>
            <div className=" container-xxl max-width-xxl">
                <div className="d-flex justify-content-between align-items-center m-4">
                    <div className="d-flex flex-column">
                        <h5>Keterangan Acara</h5>
                        <div className="mb-3">
                            <Inputans type="text" placeholder="Nama Acara" autoFocus={true} name="title" value={eventData.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <Inputans type="text" placeholder="Lokasi" autoFocus={true} name="location" value={eventData.location} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <Inputans type="text" placeholder="Tanggal" autoFocus={true} name="date" value={eventData.date} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <Inputans type="text" placeholder="Harga (IDR)" autoFocus={true} name="price" value={eventData.price} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <Inputans type="text" placeholder="Link Acara" autoFocus={true} name="eventLink" value={eventData.eventLink} onChange={handleInputChange} />
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
                    <div>
                        <ImageUp onImageChange={handleImageChange} />
                    </div>
                </div>
            </div>
            <div className=" container-xxl max-width-xxl">
                <div className="d-flex justify-content-between align-items-center m-4">
                    <h5>Deskripsi Acara</h5>
                </div>
                <div className="m-4">
                    <Form.Control as="textarea" placeholder="Deskripsi" rows={4} name="description" value={eventData.description} onChange={handleInputChange} style={{ backgroundColor: "#EFF1F999 ", width: "100%", height: "271px" }} />
                </div>
                <div className="p-3" >
                    <div className='d-flex gap-2 justify-content-end'>
                        <Buttonn
                            className={"bg-white text-primary"}
                            label="Batal"
                            // onClick nya diisi sesuai kondisi
                            onClick={closePopup}
                        />
                        <Buttonn
                            className={"bg-button"}
                            label="Tambah"
                            // onClick nya diisi sesuai kondisi
                            onClick={handleFormSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default KontenEditAcara;
