import React, { useState } from "react";
import { MdEditSquare } from "react-icons/md";
import KontenDataUser from "../../Organism/konten/kontenDataUser";
import '../../../styles/modalJadwal.css';

import { Modal } from "react-bootstrap";

const ModalDataUser = () => {
    const [showPopup, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openPopup = () => {
        setShow(true);
    };

    const closePopup = () => {
        setShow(false);
    };

    return (
        <section>

            {/* Tombol untuk membuka pop-up */}
            <button onClick={openPopup} variant="link" className="bg-transparent" style={{background: 'none', border: 'none'}}>
                <MdEditSquare color='#F4518D'/>
            </button>

            {/* Pop-up */}
            
            <Modal show={showPopup} onHide={closePopup} size="xl" dialogClassName="custom-modal-database-data-user">
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KontenDataUser onClose={closePopup}/>
                </Modal.Body>
            </Modal>

        </section>
    );
};

export default ModalDataUser;