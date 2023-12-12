import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalSucces from '../Molekul/Modal/successModal';
import { CiSquarePlus } from 'react-icons/ci';
import '../../styles/JobtypeModal.css';

function JobType({ label }) {
  const [show, setShow] = useState(false);
  const [jobTypeInput, setJobTypeInput] = useState(''); 
  const [Success, setSuccess] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  
  const handleChange = (e) => {
    setJobTypeInput(e.target.value);
  }
  
  // tambahkan fungsi untuk menyimpan perubahan pake Axios Oci trus hubungkan dengan checkbox yang ada di karir
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan perubahan
    setSuccess(true);
    setJobTypeInput('');
    handleClose(e);
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
                type="text" // Change to text type for jobTypeInput
                value={jobTypeInput}
                onChange={handleChange}
                className="main-form"
                id="FormControlInput1"
                placeholder="Tambah JobType"
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

      <ModalSucces 
        isOpen={Success} 
        teks="Berhasil menambahkan karier"
        onClose={() => setSuccess(false)} />

    </>
  );
}

export default JobType;
