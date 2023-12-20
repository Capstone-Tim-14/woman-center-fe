// FormJadwalKonselor.js
import React, { useState } from 'react';
import CheckboxDataKonselor from '../../Atom/checkbox/CheckboxDataKonselor';

function FormJadwalKonselor({ label, onCheckboxChange }) {
  const initialData = [
    { day_schedule: 'Senin', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
      ] 
    },
    { day_schedule: 'Selasa', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
      ] 
    },
    { day_schedule: 'Selasa', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
      ] 
    },
    { day_schedule: 'Rabu', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
      ] 
    },
    { day_schedule: 'Kamis', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
      ] 
    },
    { day_schedule: 'Jumat', 
      schedule: [
        { 
          time_start: { value: '08:10 WIB', selected: false },
          time_finish: { value: '09:20 WIB', selected: false }
        },
        {
          time_start: { value:'10:30 WIB', selected: false },
          time_finish: { value: '13.00 WIB', selected: false }
        },
        {
          time_start: { value:'14.00 WIB', selected: false },
          time_finish: { value: '15.20 WIB', selected: false }
        }
    ] 
  }
  ];

  const [checkboxes, setCheckboxes] = useState(initialData);

  const handleCheckboxChange = (day_scheduleIndex, scheduleIndex, timeType) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[day_scheduleIndex].schedule[scheduleIndex][timeType].selected =
      !updatedCheckboxes[day_scheduleIndex].schedule[scheduleIndex][timeType].selected;
    setCheckboxes(updatedCheckboxes);
  
    const selectedTimes = updatedCheckboxes.reduce((result, data) => {
      const times = data.schedule
        .filter(schedule => schedule.time_start.selected || schedule.time_finish.selected)
        .map(schedule => ({
          day_schedule: data.day_schedule,
          time_start: schedule.time_start.selected ? schedule.time_start.value : null,
          time_finish: schedule.time_finish.selected ? schedule.time_finish.value : null,
        }));
  
      return result.concat(times);
    }, []);
  
    onCheckboxChange(selectedTimes);
  };
  

  return (
    <>
      <div className="container-xl mt-2">
        <div className="row mx-2">
          <div className="d-flex">
            <p className="fw-semibold ">{label}</p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row mx-2">
          <div className="d-flex ">
            <div className="d-flex justify-content-between" style={{ gap: '20px', width: '100%' }}>
              {checkboxes.map((day_scheduleData, day_scheduleIndex) => (
                <div key={day_scheduleIndex} className="g-col-6">
                  <p className="fw-semibold">{day_scheduleData.day_schedule}</p>
                  <div className='d-flex justify-content-between gap-1' style={{ fontSize: '15px' }}>
                    <p className='fw-semibold m-0'>Time Start</p>
                    <p className='fw-semibold m-0'>Time Finish</p>
                  </div>
                  <div>
                    {day_scheduleData.schedule.map((schedule, scheduleIndex) => (
                      <div key={scheduleIndex} className="d-flex g-col-6" style={{ fontSize: '15px' }}>
                        <CheckboxDataKonselor
                          label={`${schedule.time_start.value}`}
                          value={schedule.time_start.selected}
                          onChange={() => handleCheckboxChange(day_scheduleIndex, scheduleIndex, 'time_start')}
                        />
                        <CheckboxDataKonselor
                          label={`${schedule.time_finish.value}`}
                          value={schedule.time_finish.selected}
                          onChange={() => handleCheckboxChange(day_scheduleIndex, scheduleIndex, 'time_finish')}
                        />
                      </div>
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
