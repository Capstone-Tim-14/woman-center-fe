import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import KontenTambah from "../Component/kontenTambah";
import KontenEditAcara from "../../Organism/kontenEditAcara";
import "../../../styles/ModalTambahEditAcara.css";

const ModalEditAcara = () => {
    const [showPopup, setShow] = useState(false);


    const openPopup = () => {
        setShow(true);
    };

    const closePopup = () => {
        setShow(false);
    };

    

    return (
        <section>

            {/* Tombol untuk membuka pop-up */}
            <button onClick={openPopup} variant="link" className="bg-white mx-auto d-flex justify-content-end">
                test
            </button>

            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="lg" scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Acara</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <KontenEditAcara onClose={closePopup} />
                </Modal.Body>
                
            </Modal>

        </section>
    );
};

export default ModalEditAcara;