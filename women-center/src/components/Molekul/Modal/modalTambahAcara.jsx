import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import KontenTambahAcara from "../../Organism/kontenTambahAcara";
import "../../../styles/ModalTambahEditAcara.css";

const ModalTambahAcara = () => {
    const [showPopup, setShow] = useState(false);


    const openPopup = (breakpoint) => {
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
            <div>
                <Modal show={showPopup} onHide={closePopup} size="lg" scrollable>
                    <Modal.Header closeButton>
                        <Modal.Title>Tambah Acara</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <KontenTambahAcara onClose={closePopup} />
                    </Modal.Body>
                    {/* <Modal.Footer>
                </Modal.Footer> */}
                </Modal>
            </div>

        </section>
    );
};

export default ModalTambahAcara;