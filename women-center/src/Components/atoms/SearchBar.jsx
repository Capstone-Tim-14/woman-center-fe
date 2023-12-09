import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';
import PopUpModal from '../organisms/PopUpModal'; // Import PopUpModal component here

const Searching = ({ value, onChange, onSearch }) => (
  <div className="d-flex align-items-center py-2 px-3 border rounded-2">
    <FiSearch className='me-3' />
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => {
        onChange(e); // Propagate the onChange event
        onSearch(e.target.value); // Trigger search on input change
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSearch(value); // Trigger search on Enter key press
        }
      }}
      style={{ border: 'none', outline: 'none', backgroundColor: 'white' }}
    />
  </div>
);

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal display

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
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal display
  };

  return (
    <div className="search-bar">
      <Searching
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={(text) => {
          setSearchText(text); // Update the search text state
          handleSearch(); // Trigger the search function
        }}
      />

      {/* Display search results */}
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>

      {/* PopUpModal component */}
      <PopUpModal isOpen={isModalOpen} togglePopup={handleToggleModal} />
    </div>
  );
};

export default SearchBar;
