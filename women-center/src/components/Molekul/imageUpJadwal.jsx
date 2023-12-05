import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../../styles/imageUp.css';
import { FiUploadCloud } from "react-icons/fi";
import { FaImage } from "react-icons/fa6";

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
                    <h5>Poster Acara</h5>
                    <div className="input-file-container-jadwal">
                        <input
                            type="file"
                            id="imageInput"
                            className="input-file"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="imageInput" className="input-file-text-jadwal">
                            <h1><FaImage /></h1>
                            <FiUploadCloud /> Upload Image
                        </label>
                        
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default ImageUpJadwal;