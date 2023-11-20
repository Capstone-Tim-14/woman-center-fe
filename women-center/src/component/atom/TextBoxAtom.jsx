import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './TextBoxAtom.css'; 

const TextBoxAtom = ({ title, placeholder, value, onChange, className}) => {
 

  return (
    <Form.Group controlId={`textBox${title}`} className="text-box-atom">
      <div>
        <Form.Label>{title}</Form.Label>
      </div>
      <div>
       
       
          <Form.Control
            type="text"
            as="input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
          />
        
      </div>
    </Form.Group>
  );
};

export default TextBoxAtom;