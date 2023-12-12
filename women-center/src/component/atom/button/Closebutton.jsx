import React from 'react';
import {AiOutlineClose} from "react-icons/ai";


const CloseButton = ({ handleClose,id }) => {
  return (
    <button id={id} onClick={handleClose}>
      <AiOutlineClose className="close-icon" />
    </button>
  );
};

export default CloseButton;
