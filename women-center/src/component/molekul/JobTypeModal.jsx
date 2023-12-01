import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './JobTypeModal.css';

function JobType() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={openModal} className="icon-button" style={{background: 'none', border: 'none'}} >
        <CiSquarePlus style={{ color: 'var(--Primary, #5570F1)', fontSize: '18px'}}/>
      </button>


<div className="job-type-modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='head-text'>Tambahkan Jobtype Lainnya</Modal.Title>
            </Modal.Header>
                <div className="form-group">
                    <div className='main-text'>
                    <form>
                        <input type="email" className="main-form" id="FormControlInput1" placeholder='Tambah JobType'/>
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
                onClick={handleClose}
                style={{
                  borderRadius: '12px',
                  background: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))',
                  border: 'var(--primary-gradient-1, linear-gradient(257deg, #FD8BA3 0%, #FF5BCD 100%))'
                }}
              >
                Save Changes
              </Button>

            </Modal.Footer>
      </Modal>
</div>
    </>
  );
}

export default JobType;