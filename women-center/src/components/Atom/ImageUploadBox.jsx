import React from 'react';
import { Col, Form } from 'react-bootstrap';

const ImageUploadBox = ({ title, onChange, className, id }) => {
  return (
    
      <Form.Group className={`image-upload-box ${className}`}>
        <div>
          <Form.Label>{title}</Form.Label>
        </div>
        <div>
          {/* image upload*/}
          
          <Form.Control
            type="file"
            onChange={onChange}
            className="image-upload-input"
          />
        </div>
      </Form.Group>
    
  );
};

export default ImageUploadBox;
