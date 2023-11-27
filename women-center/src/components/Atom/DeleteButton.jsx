import React, { useState } from 'react';
import DeleteConfirmation from './DeleteConfirmation';

const DeleteButton = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Handle delete confirmation logic
    console.log('Item deleted');
    setDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div>
      <button className="delete-button" onClick={handleDeleteClick}>
        <img src="public/asset/sampah.png" alt="delete-button" />
      </button>

      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};

export default DeleteButton;
