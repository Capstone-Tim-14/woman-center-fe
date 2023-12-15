import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ButtonTambahAcara from '../../Atom/button/buttontambahacara'
import KontenTambahAcara from "../../Organism/konten/kontenTambahAcara";
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

            <ButtonTambahAcara onClick={openPopup} variant="link" label="+Tambah Acara">
            </ButtonTambahAcara>

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
