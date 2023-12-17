import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUploadCloud, FiX } from 'react-icons/fi';
import { FaImage } from 'react-icons/fa6';

const ImageUploadAdd = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Check image size
    const maxSizeInBytes = 1024 * 1024; // 1MB in bytes

    if (file.size <= maxSizeInBytes) {
      setImage(file);
      setError(null);
      onImageChange(file);
    } else {
      setImage(null);
      setError('Image size must be less than or equal to 1MB.');
      onImageChange(null);
    }
  };

  const handleClearImage = () => {
    setImage(null);
    setError(null);
    onImageChange(null);
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
            <label htmlFor="imageInput" className="input-file-text" style={{justifyContent: 'center'}}>
              <h1>
                <FaImage />
              </h1>
              <FiUploadCloud /> Upload Image
            </label>
            <div className="input-file-box">
              {/* Display the uploaded image and error message */}
              {error && <p className="error-message">{error}</p>}
              {image && !error && (
                <>
                  <img src={URL.createObjectURL(image)} alt="Uploaded" />
                  <p>File Size: {image.size} bytes</p>
                  <button className="delete-button" onClick={handleClearImage}>
                    <FiX /> Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageUploadAdd;
