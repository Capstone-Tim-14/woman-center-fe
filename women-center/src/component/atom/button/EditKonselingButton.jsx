import React from 'react';

const EditKonselingButton = ({ handleCancel, handleSubmit }) => {
  return (
    <div className="button-container">
      <button id='btn-batalKonseling' type="button" onClick={handleCancel}>Batalkan Konseling</button>
      <button id='btn-submitKonseling' type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditKonselingButton;
