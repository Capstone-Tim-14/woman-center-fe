import React, { useState } from 'react';
import moment from 'moment'; // Make sure to install 'moment' if not already installed
import './style.css'

const FilterDate = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const applyDateFilter = () => {
    let newStartDate, newEndDate;

    if (document.getElementById("checkboxThisWeek").checked) {
      newStartDate = moment().startOf('week').format('YYYY-MM-DD');
      newEndDate = moment().endOf('week').format('YYYY-MM-DD');
    } else if (document.getElementById("checkboxThisMonth").checked) {
      newStartDate = moment().startOf('month').format('YYYY-MM-DD');
      newEndDate = moment().endOf('month').format('YYYY-MM-DD');
    } else if (document.getElementById("checkboxThisYear").checked) {
      newStartDate = moment().startOf('year').format('YYYY-MM-DD');
      newEndDate = moment().endOf('year').format('YYYY-MM-DD');
    } else if (document.getElementById("checkboxCustomRange").checked) {
      newStartDate = document.getElementById("startDate").value;
      newEndDate = document.getElementById("endDate").value;
    }

    console.log("Start Date:", newStartDate);
    console.log("End Date:", newEndDate);

    // Add logic to fetch and display articles based on the selected date range
    alert("Filtering articles based on the selected date range. Replace this with your actual logic.");

    // Initialize FullCalendar with the selected date range
    // Note: Make sure to import and set up FullCalendar in your React project
    // as the direct usage of jQuery in React is not recommended
  };

  const toggleCustomCheckbox = () => {
    let checkboxCustomRange = document.getElementById("checkboxCustomRange");
    let startDateInput = document.getElementById("startDate");
    let endDateInput = document.getElementById("endDate");

    startDateInput.disabled = !checkboxCustomRange.checked;
    endDateInput.disabled = !checkboxCustomRange.checked;
  };

  return (
    <div>
      {/* Popup for Date Filter */}
      <div id="dateFilterPopup" className="popup">
        <h2>Berdasarkan Tanggal</h2>
        <div className="checkbox-container">
          <label>
            <input type="checkbox" className="date-interval-checkbox" id="checkboxThisWeek" /> Minggu Ini
          </label>
          <label>
            <input type="checkbox" className="date-interval-checkbox" id="checkboxThisMonth" /> Bulan Ini
          </label>
          <label>
            <input type="checkbox" className="date-interval-checkbox" id="checkboxThisYear" /> Tahun Ini
          </label>
        </div>
        <div className="interval-checkbox-container">
          <div className="interval-checkbox-wrapper" onClick={toggleCustomCheckbox}>
            <input type="checkbox" className="interval-checkbox" id="checkboxCustomRange" />
            <div className="custom-checkbox"></div>
            <label className="interval-checkbox-label">Interval Date</label>
          </div>
        </div>
        <div className="date-range-container">
          <label htmlFor="startDate">Dari:</label>
          <input type="date" id="startDate" disabled={true} onChange={(e) => setStartDate(e.target.value)} />
          <label htmlFor="endDate">Sampai:</label>
          <input type="date" id="endDate" disabled={true} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <button onClick={applyDateFilter}>Filter</button>
      </div>

      {/* FullCalendar Script (Add this to the end of your body) */}
      {/* Make sure to include FullCalendar in your React project and initialize it properly */}
    </div>
  );
};

export default FilterDate;