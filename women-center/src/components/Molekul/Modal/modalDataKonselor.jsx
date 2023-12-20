import React, { useState } from "react";
import IconEdit from "../../Atom/iconEdit";
import KontenDataKonselor from "../../Organism/konten/kontenDataKonselor";
import { Modal } from "react-bootstrap";
const ModalDataKonselor = () => {
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
            <button onClick={openPopup} variant="link" className="bg-transparent" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <IconEdit size={20} />
            </button>

            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Konselor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KontenDataKonselor onClose={closePopup}/>
                </Modal.Body>
            </Modal>

        </section>
    );
};

export default ModalDataKonselor;