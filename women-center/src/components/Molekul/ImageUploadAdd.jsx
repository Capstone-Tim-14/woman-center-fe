import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ImageUploadBox from '../Atom/ImageUploadBox';
import "../../styles/ImageUpload.css";
import { FiUploadCloud } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";

const ImageUploadAdd = ({ onImageChange }) => {
    const [image, setImage] = useState(null);


const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    console.log('Uploaded file:', file);
   
    
    setImage(file);

    onImageChange(file); 
  };
  
  return (
    <Container>
      
      <Row>
        <Col>
          <div className="input-file-container">
            <input
              type="file"
              id="imageInput" 
              className="input-file"
              onChange={handleImageUpload}
            />
            <label htmlFor="imageInput" className="input-file-text">
            <h1><FaImage /></h1>

            <FiUploadCloud /> Upload Image
            <div className="upload-description">
            <h6>
          Upload a cover image for your product.
            </h6>
            <p> File Format  <strong>jpeg </strong>,  <strong>png</strong> Recommended Size  <strong>1920x1080</strong></p>
            </div>
            </label>
            
            <div className="input-file-box"></div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default ImageUploadAdd;