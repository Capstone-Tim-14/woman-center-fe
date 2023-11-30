import React, { useState } from 'react';
import CategoryButton from '../atom/CategoryButton';
import { Row, Col, Container } from 'react-bootstrap';
import './CategorySelect.css'


const CategorySelect = ({ onCategoryChange }) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [newCategoryInput, setNewCategoryInput] = useState('');
    const [categories, setCategories] = useState([
      'Berita Wanita',
      'Teknologi',
      'Karier',
      'Seni & Kreativitas',
      'Gaya Hidup',
      'Mental Health',
    ]);

    const handleCategoryToggle = (category) => {
        
        setSelectedCategories((prevSelected) =>
          prevSelected.includes(category)
            ? prevSelected.filter((selected) => selected !== category)
            : [...prevSelected, category]
        );
        
        onCategoryChange(selectedCategories);
        if (onCategoryChange) {
          onCategoryChange(selectedCategories);
        }
      
      };
    
      const handleInputButtonClick = () => {
    if (newCategoryInput.trim() !== '') {
      setCategories((prevCategories) => [...prevCategories, newCategoryInput]);
      setNewCategoryInput('');
    }
  };
    
      const handleInputChange = (event) => {
        setNewCategoryInput(event.target.value);
      };

       const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleInputButtonClick();
        }
      };
      const margin = {
        marginLeft: '16px',
        
       
      };

      return (
        
        
        <Container style={margin}>
        <Row>
          <p>Kategori</p>
          
          {categories.map((category) => (
          <CategoryButton
            key={category}
            title={category}
            onClick={() => handleCategoryToggle(category)}
            selected={selectedCategories.includes(category)}
          />
        ))}
            <input
          type="text"
          placeholder="Type your category"
          value={newCategoryInput}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="category-input"
        />
        <button className='add-category' onClick={handleInputButtonClick}>+Tambah Kategori</button>
      </Row>
        </Container>
          
        
      );
    };

export default CategorySelect