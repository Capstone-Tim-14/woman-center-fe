import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import PopUpModal from '../Molekul/popUpModal.jsx';
import FilterKalender from '../Molekul/Modal/filterKalenderPaket';
import '../../styles/searchBar.css';


const Searching = ({ value, onChange, onSearch }) => (
  <div className="d-flex align-items-center py-1 px-2 border rounded-2">
    <FiSearch className='me-3' />
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSearch(); // Trigger search on Enter key press
        }
      }}
      style={{ border: 'none', outline: 'none', backgroundColor: 'white' }}
    />
  </div>
);

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
    // Simulate API call by filtering dummy data
    const dummyData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Alice Smith' },
      // Add more dummy data as needed
    ];

    const filteredData = dummyData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(filteredData);
    togglePopup(); // Optionally close the modal after search
  };

  return (
    <div className="search-bar">
      <Searching value={searchText} onChange={(e) => setSearchText(e.target.value)} onSearch={handleSearch} />

      <FilterKalender />
    </div>
  );
};

export default SearchBar;