
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextBoxAtom from '../atom/TextBoxAtom';
import './TextBoxArtikel.css';

import FormWithEditor from '../atom/TextEditor';

const TextBoxArtikel = ({ onTitleChange, onArticleContentChange, onSubmit  }) => {
    const [title, setTitle] = useState('');
    const [articleContent, setArticleContent] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
      onTitleChange(e.target.value);
    };
  
    const handleArticleContentChange = (e) => {
      setArticleContent(e.target.value);
      onArticleContentChange(e.target.value);
    };

    const handleSubmitForm = () => {
      // Call the onSubmit prop with the form data
      onSubmit(title, articleContent);
    };
  
    return (
      <Container>
        <Row className="text-left">
          
            <TextBoxAtom
              className="text-box-artikel"
              title="Judul"
              placeholder="Your text goes here"
              value={title}
              onChange={handleTitleChange}
              type="text"
            />
            
        </Row>
        <Row>

            <p className='title-content'>Isi Artikel</p>
            <FormWithEditor onTextChange={handleArticleContentChange} ></FormWithEditor> 

        </Row>
      </Container>
    );


  };
export default TextBoxArtikel;
