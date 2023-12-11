import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import KontenTambah from "../Component/kontenTambah";
import KontenEditAcara from "../../Organism/konten/kontenEditAcara";
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
            <button onClick={openPopup} variant="link" className="bg-white">
                sss
            </button>

            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Acara</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KontenEditAcara onClose={closePopup} />
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>

        </section>
    );
};

export default ModalEditAcara;