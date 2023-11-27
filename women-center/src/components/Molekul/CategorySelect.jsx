import React, { useState } from 'react';
import CategoryButton from '../Atom/CategoryButton';
import { Row, Col, Container } from 'react-bootstrap';


const CategorySelect = ({ onCategoryChange }) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
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
    
      
      
      const margin = {
        marginLeft: '16px',
        
       
      };

      return (
        
        
        <Container style={margin}>
        <Row>
          <p>Kategori</p>
          
          
         
              
            <CategoryButton
                title="Berita Wanita"
                onClick={() => handleCategoryToggle('Berita Wanita')}
                selected={selectedCategories.includes('Berita Wanita')}
            />
            <CategoryButton
                title="Teknologi"
                onClick={() => handleCategoryToggle('Teknologi')}
                selected={selectedCategories.includes('Teknologi')}
            />
            <CategoryButton
                title="Karier"
                onClick={() => handleCategoryToggle('Karier')}
                selected={selectedCategories.includes('Karier')}
            />
            <CategoryButton
                title="Seni & Kreativitas"
                onClick={() => handleCategoryToggle('Seni')}
                selected={selectedCategories.includes('Seni')}
            />
            <CategoryButton
                title="Gaya Hidup"
                onClick={() => handleCategoryToggle('Gaya')}
                selected={selectedCategories.includes('Gaya')}
            />
            <CategoryButton
                title="Mental Health"
                onClick={() => handleCategoryToggle('Mental')}
                selected={selectedCategories.includes('Mental')}
            />
            <CategoryButton
                title="+Tambah Kategori"
                onClick={() => handleCategoryToggle('Tambah')}
                selected={selectedCategories.includes('Tambah')}
            />

        
            
         
          
        </Row>
        </Container>
          
        
      );
    };

export default CategorySelect