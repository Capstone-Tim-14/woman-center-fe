// FormJadwalKonselor.js
import React, { useState } from 'react';
import CheckboxDataKonselor from '../../Atom/checkbox/CheckboxDataKonselor';

function FormJadwalKonselor({ label, onCheckboxChange }) {
  const initialData = [
    { day: 'Senin', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
      ] 
    },
    { day: 'Selasa', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
      ] 
    },
    { day: 'Selasa', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
      ] 
    },
    { day: 'Rabu', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
      ] 
    },
    { day: 'Kamis', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
      ] 
    },
    { day: 'Jumat', 
      schedule: [
        { 
          time_start: { value: '08:10', selected: false },
          time_finish: { value: '09:20', selected: false }
        },
        {
          time_start: { value:'10:30', selected: false },
          time_finish: { value: '13.00', selected: false }
        },
        {
          time_start: { value:'14.00', selected: false },
          time_finish: { value: '15.20', selected: false }
        }
    ] 
  }
  ];

  const [checkboxes, setCheckboxes] = useState(initialData);

  const handleCheckboxChange = (dayIndex, scheduleIndex, timeType) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[dayIndex].schedule[scheduleIndex][timeType].selected =
      !updatedCheckboxes[dayIndex].schedule[scheduleIndex][timeType].selected;
    setCheckboxes(updatedCheckboxes);

    const selectedCheckboxes = updatedCheckboxes.reduce((result, data) => {
      const selectedTimes = data.schedule
        .filter(schedule => schedule.time_start.selected || schedule.time_finish.selected)
        .map(schedule => ({
          time_start: schedule.time_start.value,
          time_finish: schedule.time_finish.value,
        }));

      if (selectedTimes.length > 0) {
        result.push({
          day_schedule: data.day,
          time_schedule: selectedTimes,
        });
      }

      return result;
    }, []);

    onCheckboxChange(selectedCheckboxes);
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
              {checkboxes.map((dayData, dayIndex) => (
                <div key={dayIndex} className="g-col-6">
                  <p className="fw-semibold">{dayData.day}</p>
                  <div className='d-flex justify-content-between gap-1' style={{ fontSize: '15px' }}>
                    <p className='fw-semibold m-0'>Time Start</p>
                    <p className='fw-semibold m-0'>Time Finish</p>
                  </div>
                  <div>
                    {dayData.schedule.map((schedule, scheduleIndex) => (
                      <div key={scheduleIndex} className="d-flex g-col-6" style={{ fontSize: '15px' }}>
                        <CheckboxDataKonselor
                          label={`${schedule.time_start.value}`}
                          value={schedule.time_start.selected}
                          onChange={() => handleCheckboxChange(dayIndex, scheduleIndex, 'time_start')}
                        />
                        <CheckboxDataKonselor
                          label={`${schedule.time_finish.value}`}
                          value={schedule.time_finish.selected}
                          onChange={() => handleCheckboxChange(dayIndex, scheduleIndex, 'time_finish')}
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
