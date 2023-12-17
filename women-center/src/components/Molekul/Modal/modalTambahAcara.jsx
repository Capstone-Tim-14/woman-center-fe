import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ButtonTambahAcara from '../../Atom/button/buttontambahacara'
import KontenTambahAcara from "../../Organism/konten/kontenTambahAcara";
import axios from 'axios';

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
                <Modal show={showPopup} onHide={closePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tambah Acara</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
