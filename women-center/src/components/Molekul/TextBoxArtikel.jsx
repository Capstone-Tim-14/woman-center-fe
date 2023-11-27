import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextBoxAtom from '../Atom/TextBoxAtom';
import "../../styles/TextBoxArtikel.css";

import FormWithEditor from '../Atom/TextEditor';

const TextBoxArtikel = ({ onTitleChange, onArticleContentChange }) => {
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

            <p>Isi Artikel</p>
            <FormWithEditor onTextChange={handleArticleContentChange} ></FormWithEditor> 

        </Row>
      </Container>
    );


  };
export default TextBoxArtikel;
