import React, { useState } from "react";
import IconEdit from "../../Atom/iconEdit";
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
            <button onClick={openPopup} variant="link" className="bg-white">
                <IconEdit size={20} />
            </button>

            {/* Pop-up */}
            
            <Modal show={showPopup} onHide={closePopup} size="xl" >
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