import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import KontenTambahAcara from "../../Organism/kontenTambahAcara";

const ModalTambahAcara = () => {
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
            <button onClick={openPopup} variant="link" className="bg-white mx-auto dflex justify-content-end">
                sss
            </button>

            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Acara</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KontenTambahAcara onClose={closePopup} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </section>
    );
};

export default ModalTambahAcara;