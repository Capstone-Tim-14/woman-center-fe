import React, { useState, useEffect } from 'react';
import { LuCalendarDays } from 'react-icons/lu';

const dummyArticles = [
  { id: 1, title: 'Dummy Article 1', date: '2023-12-01' },
  { id: 2, title: 'Dummy Article 2', date: '2023-12-05' },
  { id: 3, title: 'Dummy Article 3', date: '2023-12-10' },
  // Add more dummy articles as needed
];

const PopUpModal = ({ isOpen, togglePopup, onFilterApply }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

  const refreshData = () => {
    console.log('Merefresh data dengan rentang tanggal:', startDate, endDate);
    const filteredData = filterArticlesByDate(allArticles, startDate, endDate);
    setFilteredArticles(filteredData);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    setStartDate(null);
    setEndDate(null);
    setDefaultDateRange(option);
  };

  const handleDateChange = (event, type) => {
    const value = event.target.value;

    if (type === 'start') {
      setStartDate(value);
    } else if (type === 'end') {
      setEndDate(value);
    }
  };

  const handleFilterDate = () => {
    console.log('Menerapkan filter dengan rentang tanggal:', startDate, endDate);
    refreshData();
    togglePopup();
    onFilterApply({ startDate, endDate });
  };

  const setDefaultDateRange = (option) => {
    const currentDate = new Date();
    let newStartDate = null;
    let newEndDate = null;

    if (option === 'week') {
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextWeek = new Date(currentDate);
      nextWeek.setDate(currentDate.getDate() + 7);
      newEndDate = nextWeek.toISOString().split('T')[0];
    } else if (option === 'month') {
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextMonth = new Date(currentDate);
      nextMonth.setDate(currentDate.getDate() + 30);
      newEndDate = nextMonth.toISOString().split('T')[0];
    } else if (option === 'year') {
      newStartDate = currentDate.toISOString().split('T')[0];
      const nextYear = new Date(currentDate);
      nextYear.setDate(currentDate.getDate() + 365);
      newEndDate = nextYear.toISOString().split('T')[0];
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
    refreshData();
  };

  useEffect(() => {
    refreshData();
  }, [startDate, endDate]);

  useEffect(() => {
    /* 
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        const data = response.data;
        setAllArticles(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setAllArticles(dummyArticles);
      });
    */
    // Temporary use of dummyArticles
    setAllArticles(dummyArticles);
  }, []);

  const filterArticlesByDate = (articles, start, end) => {
    return articles.filter((article) => {
      const articleDate = new Date(article.date);
      return (
        (!start || articleDate >= new Date(start)) &&
        (!end || articleDate <= new Date(end))
      );
    });
  };

  return (
    <div>
      <div className="filter-date-icon" onClick={togglePopup}>
        <LuCalendarDays size={20} />
      </div>

      {isOpen && (
        <div className="modal-overlay">
          <div className="popup">
            <div className="popup-header">
              <h2>Berdasarkan Tanggal</h2>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === 'week'}
                  onChange={() => handleCheckboxChange('week')}
                />
                Minggu
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOption === 'month'}
                  onChange={() => handleCheckboxChange('month')}
                />
                Bulan
              </label>
              <label>
                <input
                  type="checkbox"
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
                  value={startDate}
                  onChange={(e) => handleDateChange(e, 'start')}
                />
                <label>Sampai </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => handleDateChange(e, 'end')}
                />
              </div>
            )}
            <button className="filter-date-button" onClick={handleFilterDate}>
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpModal;
