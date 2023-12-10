import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../styles/KalenderContainer.css"


const KalenderLeft = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
  <div className="Kalender-left">
        <div className="head-kalender-left">
            <h6 className="txt-kalender-left">Kalender</h6>
        </div>
        {/*<Kalender/>*/}
            <div style={{ width: '100%', height: '100vh' }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        inline
        calendarContainer={({ className, children }) => (
          <div style={{ maxWidth: '100%', maxHeight: '100%' }} className={className}>
            {children}
          </div>
        )}
      />
    </div>
  </div>
  )
};

export default KalenderLeft;