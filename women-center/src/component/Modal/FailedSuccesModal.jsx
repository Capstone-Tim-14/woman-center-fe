import React, { useState } from 'react';
import Modal from './modalsucces';  // Perbaiki impor sesuai dengan nama komponen
import FailedModal from './failedmodal';  // Sesuaikan impor dengan nama yang benar
import './modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Medel = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFailedModalOpen, setFailedModalOpen] = useState(false);  // Tambahkan state untuk modal gagal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openFailedModal = () => {
    setFailedModalOpen(true);
  };

  const closeFailedModal = () => {
    setFailedModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Buka Modal Berhasil</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <button onClick={openFailedModal}>Buka Modal Gagal</button>
      <FailedModal isOpen={isFailedModalOpen} onClose={closeFailedModal} />
    </div>
  );
};

export default Medel;
