import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import { LuCalendarDays } from 'react-icons/lu';
import '../../../styles/filterKalenderPaket.css'

const FilterKalenderPaket = ({onfilterApply}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [show, setShow] = useState(false);
  const [alldates, setAllDates] = useState([]);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckboxChange = (option) => {
    // Hanya satu checkbox yang dapat dipilih
    setSelectedOption(option === selectedOption ? null : option);

    // Reset tanggal saat opsi berubah
    setStartDate(null);
    setEndDate(null);

    // Set rentang waktu otomatis
    setDefaultDateRange(option);
  };
  
  // Fungsi untuk mengatur rentang tanggal sesuai dengan opsi yang dipilih
  const setDefaultDateRange = (option) => {
    const currentDate = new Date();
    let newStartDate = null;
    let newEndDate = null;

    if (option === 'week') {
      // Set rentang minggu dari hari ini hingga 7 hari ke depan
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextWeek = new Date(currentDate);
      nextWeek.setDate(currentDate.getDate() + 7);
      newEndDate = nextWeek.toISOString().split('T')[0];
    } else if (option === 'month') {
      // Set rentang bulan dari hari ini hingga 30 hari ke depan
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextMonth = new Date(currentDate);
      nextMonth.setDate(currentDate.getDate() + 30);
      newEndDate = nextMonth.toISOString().split('T')[0];
    } else if (option === 'year') {
      // Set rentang tahun dari hari ini hingga 365 hari ke depan
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextYear = new Date(currentDate);
      nextYear.setDate(currentDate.getDate() + 365);
      newEndDate = nextYear.toISOString().split('T')[0];
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  // value inputan date
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else if (name === 'endDate') {
      setEndDate(value);
    }
  };

  // submit inputan
  const handleFilterDate = (event) => {
    event.preventDefault();
    setAllDates(`${startDate} - ${endDate}`);
    handleClose();
    onfilterApply([startDate, endDate]);
  };

  useEffect(() => {
    console.log(alldates);
  }, [alldates]);

  return (
      <>
      <button
        className='d-flex justify-items-center rounded-2'
        style={{border: '0px solid black', background: 'none', padding: '6px', width:'60'}}
        onClick={handleShow}>
        <LuCalendarDays size={25} />
      </button>

      <Modal show={show} onHide={handleClose} >
        <div className="modal-overlay-kalender">
            <div className="popup-kalender">
            <div className="popup-header-kalender">
                <h2>Berdasarkan Tanggal</h2>
            </div>
            <div>
                {/* Checkbox untuk memilih rentang tanggal */}
                <label>
                <input
                    type="checkbox"
                    style={{marginLeft: '-165px'}}
                    checked={selectedOption === 'week'}
                    onChange={() => handleCheckboxChange('week')}
                />
                Minggu
                </label>
                <label>
                <input
                    type="checkbox"
                    style={{marginLeft: '-165px'}}
                    checked={selectedOption === 'month'}
                    onChange={() => handleCheckboxChange('month')}
                />
                Bulan
                </label>
                <label>
                <input
                    type="checkbox"
                    style={{marginLeft: '-165px'}}
                    checked={selectedOption === 'year'}
                    onChange={() => handleCheckboxChange('year')}
                />
                Tahun
                </label>
            </div>
            {selectedOption && (
                <div>
                <label>Dari </label>
                <input
                    type="date"
                    name='startDate'
                    value={startDate}
                    onChange={handleDateChange}
                />
                <label>Sampai </label>
                <input
                    type="date"
                    name='endDate'
                    value={endDate}
                    onChange={handleDateChange}
                />
                </div>
            )}
            <button className="filter-date-button-kalender" onClick={handleFilterDate}>
                Filter
            </button>
            </div>
        </div>
       </Modal>
      </>
  );
};

export default FilterKalenderPaket;
