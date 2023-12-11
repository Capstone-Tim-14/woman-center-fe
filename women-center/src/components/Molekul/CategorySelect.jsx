import React, { useState, useEffect } from 'react';
import CategoryButton from '../Atom/CategoryButton';
import { Row, Col, Container } from 'react-bootstrap';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios';




const CategorySelect = ({ onCategoryChange }) => {
  const { token } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api-ferminacare.tech/api/v1/admin/articles/category', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const categoryNames = response.data.data.map((category) => category.name);
        setCategories(categoryNames);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((selected) => selected !== category)
        : [...prevSelected, category]
    );

    onCategoryChange(selectedCategories);
  };

  const handleInputButtonClick = async () => {
    try {
      if (newCategoryInput.trim() !== '') {
        // Make a POST request to add the new category
        const response = await axios.post(
          'https://api-ferminacare.tech/api/v1/admin/articles/category',
          {
            name: newCategoryInput,
            description: newCategoryInput,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
if (response.status === 201) {
        
        const addedCategory = response.data.data;
        setCategories((prevCategories) => [...prevCategories, addedCategory.name]);
        setNewCategoryInput('');
      }

      
        // Category created successfully, update your component state or take other actions
        console.log('Category created:', response.data.data);
      } else {
        console.error('Unexpected status code:', response.status);
      }
      
    } catch (error) {
      console.error('Error adding category:', error);
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
    <div style={margin}>
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
      <button className="add-category" onClick={handleInputButtonClick}>
        +Tambah Kategori
      </button>
    </div>
  );
};

export default CategorySelect;