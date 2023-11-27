import React, { useState } from 'react';

const Checkbox = () => {
  const [showWeek, setShowWeek] = useState(false);
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const handleCheckboxChange = (option) => {
    switch (option) {
      case 'week':
        setShowWeek(!showWeek);
        setShowMonth(false); // Reset status checkbox lainnya
        setShowYear(false);
        break;
      case 'month':
        setShowMonth(!showMonth);
        setShowWeek(false);
        setShowYear(false);
        break;
      case 'year':
        setShowYear(!showYear);
        setShowWeek(false);
        setShowMonth(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showWeek}
          onChange={() => handleCheckboxChange('week')}
        />
        Show Week
      </label>

      <label>
        <input
          type="checkbox"
          checked={showMonth}
          onChange={() => handleCheckboxChange('month')}
        />
        Show Month
      </label>

      <label>
        <input
          type="checkbox"
          checked={showYear}
          onChange={() => handleCheckboxChange('year')}
        />
        Show Year
      </label>
    </div>
  );
};

export default Checkbox;
