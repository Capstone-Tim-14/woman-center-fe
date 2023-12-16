// FormJadwalKonselor.js
import React, { useState } from 'react';
import CheckboxDataKonselor from '../../Atom/checkbox/CheckboxDataKonselor';

function FormJadwalKonselor({ label, onCheckboxChange }) {
  const initialData = [
    { day: 'Senin', schedule: [
      { time: '08:10 WIB', selected: false, value: '08:10' },
      { time: '09:20 WIB', selected: false, value: '09:20' },
      { time: '10:30 WIB', selected: false, value: '10:30' },
      { time: '13:00 WIB', selected: false, value: '13:00' },
      { time: '14:10 WIB', selected: false, value: '14:10' },
      { time: '15:20 WIB', selected: false, value: '15:20' },
    ] },
    { day: 'Selasa', schedule: [
      { time: '08:10 WIB', selected: false, value: '08:10' },
      { time: '09:20 WIB', selected: false, value: '09:20' },
      { time: '10:30 WIB', selected: false, value: '10:30' },
      { time: '13:00 WIB', selected: false, value: '13:00' },
      { time: '14:10 WIB', selected: false, value: '14:10' },
      { time: '15:20 WIB', selected: false, value: '15:20' },
    ] },
    { day: 'Rabu', schedule: [
      { time: '08:10 WIB', selected: false, value: '08:10' },
      { time: '09:20 WIB', selected: false, value: '09:20' },
      { time: '10:30 WIB', selected: false, value: '10:30' },
      { time: '13:00 WIB', selected: false, value: '13:00' },
      { time: '14:10 WIB', selected: false, value: '14:10' },
      { time: '15:20 WIB', selected: false, value: '15:20' },
    ] },
    { day: 'Kamis', schedule: [
      { time: '08:10 WIB', selected: false, value: '08:10' },
      { time: '09:20 WIB', selected: false, value: '09:20' },
      { time: '10:30 WIB', selected: false, value: '10:30' },
      { time: '13:00 WIB', selected: false, value: '13:00' },
      { time: '14:10 WIB', selected: false, value: '14:10' },
      { time: '15:20 WIB', selected: false, value: '15:20' },
    ] },
    { day: 'Jumat', schedule: [
      { time: '08:10 WIB', selected: false, value: '08:10' },
      { time: '09:20 WIB', selected: false, value: '09:20' },
      { time: '10:30 WIB', selected: false, value: '10:30' },
      { time: '13:00 WIB', selected: false, value: '13:00' },
      { time: '14:10 WIB', selected: false, value: '14:10' },
      { time: '15:20 WIB', selected: false, value: '15:20' },
    ] },
  ];

  const [checkboxes, setCheckboxes] = useState(initialData);

  const handleCheckboxChange = (dayIndex, scheduleIndex) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[dayIndex]
    .schedule[scheduleIndex]
    .selected = !updatedCheckboxes[dayIndex]
    .schedule[scheduleIndex].selected;
    setCheckboxes(updatedCheckboxes);

    const selectedCheckboxes = updatedCheckboxes.map(data => ({
      day_schedule: data.day,
      time_schedule: data.schedule
        .filter(schedule => schedule.selected)
        .map(schedule => ({
          time_start: schedule.value,
        }))
    }));

    onCheckboxChange(selectedCheckboxes);
  };

  return (
    <>
      <div className="container-xl">
        <div className="row mx-2">
          <div className="d-flex">
            <p className="fw-semibold ">{label}</p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row mx-2">
          <div className="d-flex ">
            <div className=" d-flex justify-content-between" style={{ gap: '28px', width: '100%' }}>
              {checkboxes.map((dayData, dayIndex) => (
                <div key={dayIndex} className="p-2 g-col-6">
                  <p className="fw-semibold">{dayData.day}</p>
                  <div>
                    {dayData.schedule.map((schedule, scheduleIndex) => (
                      <CheckboxDataKonselor
                        key={scheduleIndex}
                        label={schedule.time}
                        value={schedule.selected}
                        onChange={() => handleCheckboxChange(dayIndex, scheduleIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormJadwalKonselor;
