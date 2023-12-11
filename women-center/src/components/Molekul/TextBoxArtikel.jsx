
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextBoxAtom from '../atom/TextBoxAtom';
import '../../styles/TextBoxArtikel.css';

import FormWithEditor from '../atom/TextEditor';

const TextBoxArtikel = ({ onTitleChange, onArticleContentChange, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [imageFile, setImageFile] = useState(null); // State to hold the image file


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleArticleContentChange = (content) => {
    setArticleContent(content);

    // Check if onArticleContentChange is defined before calling it
    if (onArticleContentChange) {
      onArticleContentChange(content);
    }
  };

  const handleSubmitForm = () => {
    // Call the onSubmit prop with the form data
    onSubmit(title, articleContent);
  };

    return (
      <Container>
        <Row >
          
        <TextBoxAtom
  className="text-box-artikel"
  title="Judul"
  placeholder="Your text goes here"
  value={title || ''}  // Use an empty string if 'title' is undefined
  onChange={handleTitleChange}
  type="text"
/>
            
        </Row>
        <Row>

            <p>Isi Artikel</p>
            <FormWithEditor onTextChange={handleArticleContentChange} ></FormWithEditor> 

        </Row>
      </Container>
    );


  };
export default TextBoxArtikel;
