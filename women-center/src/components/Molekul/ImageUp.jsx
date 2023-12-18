import '../../styles/ImageUp.css';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUploadCloud } from 'react-icons/fi';
import { FaImage } from 'react-icons/fa6';

const ImageUpJadwal = ({ onImageChange }) => {
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
        <Col style={{ overflow: 'visible' }}>
          <div className="input-file-container-jadwal">
            {/* Move the conditional rendering outside the input */}
            {image && (
              <div className="image-container-tambahacara">
                <img
                  className="image-tambahacara"
                  src={URL.createObjectURL(image)}
                  alt="Event Poster"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}
            {/* Input file section */}
            <label htmlFor="imageInput" className="input-file-text-jadwal">
              <h1>
                <FaImage />
              </h1>
              <FiUploadCloud /> Upload Image
            </label>
            <input
              type="file"
              id="imageInput"
              className="input-file"
              onChange={handleImageUpload}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageUpJadwal;