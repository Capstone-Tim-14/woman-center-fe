import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CiSquarePlus } from 'react-icons/ci';
import './JobTypeModal.css';
import Medel from '../Modal/FailedSuccesModal';

function JobType({ label }) {
  const [show, setShow] = useState(false);
  const [isDataAdded, setIsDataAdded] = useState(false); // New state to track data addition

  
  const handleClose = () => {
    setShow(false);
    setIsDataAdded(false);
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleSaveChanges = () => {
    // Assume the save is successful for demonstration purposes
    // Replace this with the actual result of your save operation
    setTimeout(() => {
      const saveSuccessful = true;
      setIsDataAdded(saveSuccessful);
      handleClose();

      // Additional logic to show success or failure modal based on the result
      setShowMedel(true);

      if (saveSuccessful) {
        setModalType('success');
      } else {
        setModalType('failed');
      }
  
      handleClose(); // Close the modal after saving
  
    }, 200); // Simulating an asynchronous operation
  };

  const handleCloseMedel = () => {
    setShowMedel(false);
    setModalType('');
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="icon-button"
        style={{ background: 'none', border: 'none' }}
      >
        <CiSquarePlus style={{ color: 'var(--Primary, #5570F1)', fontSize: '18px' }} />
        {label}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="head-text">Tambahkan Jobtype Lainnya</Modal.Title>
        </Modal.Header>
        <div className="form-group">
          <div className="main-text">
            <form>
              <input type="email" className="main-form" id="FormControlInput1" placeholder="Tambah JobType" />
            </form>
          </div>
        </div>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              borderRadius: '12px',
              border: '2px solid var(--Primary, #5570F1)',
              backgroundColor: 'white',
              color: 'var(--Primary, #5570F1)',
              height: '40px',
            }}
          >
            Close
          </Button>

          <Button
            variant="primary"
            onClick={handleSaveChanges}
            style={{
              borderRadius: '12px',
              background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
              border: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Render the Medel component based on the isDataAdded state */}
      {isDataAdded && <Medel type="success" />} {/* You may need to pass appropriate props */}
    </>
  );
}

export default JobType;
