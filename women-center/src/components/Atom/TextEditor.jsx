import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../styles/TextEditor.css";


const TextEditor = () => {
    const [text, setText] = useState("");
  
    const modules = {
      toolbar: [
        
        ['bold', 'italic', 'underline','strike'],   
        [{'align': 'justify'}, {'align': ''}, {'align': 'center'}, {'align': 'right'} ],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        
    
      ],
    };
  
    const formats = [
      
      'bold', 'italic', 'underline', 'strike',
      'list', 'bullet', 
       'align'
    ];

     const handleTextChange = (value) => {
    if (onTextChange) {
      onTextChange(value);
    }
  };

  
    return (
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={text}
          onChange={setText}
          placeholder='Your text goes here'
        />
      </div>
    );
  };
  
  const FormWithEditor = () => {
    const [editorContent, setEditorContent] = useState('');
  
    const handleTextChange = (value) => {
      setEditorContent(value);
    };
  

  
    return (
      <div>
        <TextEditor onTextChange={handleTextChange} />
        
      </div>
    );
  };
  
  export default FormWithEditor