import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalSucces from '../Molekul/Modal/successModal';
import { CiSquarePlus } from 'react-icons/ci';
import '../../styles/JobtypeModal.css';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios';

function JobType({ label, onJobTypeAdded }) {
  const { token, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [jobTypeInput, setJobTypeInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);


  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleChange = (e, field) => {
    if (field === 'jobType') {
      setJobTypeInput(e.target.value);
    } else if (field === 'description') {
      setDescriptionInput(e.target.value);
    }
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }
    setShow(false);
    resetForm();
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    // Validation
    if (!jobTypeInput || !descriptionInput) {
      setError('Please fill out both fields.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api-ferminacare.tech/api/v1/admin/career/job-type',
        {
          name: jobTypeInput,
          description: descriptionInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      if (response.status >= 200 && response.status < 300) {
        setSuccess(true);
        resetForm();

       
        onJobTypeAdded(jobTypeInput);
      } else {
        setError('Failed to add job type');
      }
    } catch (error) {
      setError(`Error submitting new job type: ${error.message}`);
    } finally {
      handleClose();
    }
  };

  const resetForm = () => {
    setJobTypeInput('');
    setDescriptionInput('');
    setError(null);
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
  
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title className="head-text">Tambahkan Jobtype Lainnya</Modal.Title>
        </Modal.Header>
        <div className="form-group">
          <div className="main-text">
            <form>
              <input
                type="text"
                value={jobTypeInput}
                onChange={(e) => handleChange(e, 'jobType')}
                className="main-form"
                id="FormControlInput1"
                placeholder="Tambah JobType"
                required={true}
              />
               <input
                type="text"
                value={descriptionInput}
                onChange={(e) => handleChange(e, 'description')}
                className="main-form"
                id="FormControlInput2"
                placeholder="Tambah Deskripsi"
                required={true}
              />
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
  
      {success && (
        <ModalSucces
          isOpen={success}
          teks="Berhasil menambahkan karier"
          onClose={() => setSuccess(false)}
        />
      )}
    </>
  );
}

export default JobType;
