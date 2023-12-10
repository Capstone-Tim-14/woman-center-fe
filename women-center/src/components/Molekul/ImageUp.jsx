import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUploadCloud } from 'react-icons/fi';
import { FaImage } from 'react-icons/fa6';
import '../../styles/imageUp.css';
const ImageUp = ({ onImageChange }) => {
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
          <h5>Poster Acara</h5>
          <div className="input-file-containers">
            {/* Move the conditional rendering outside the input */}
            {image && (
              <div className="image-containers">
                <img
                  className="image"
                  src={URL.createObjectURL(image)}
                  alt="Event Poster"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </div>
            )}
            {/* Input file section */}
            <label htmlFor="imageInput" className="input-file-texts">
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

export default ImageUp;
