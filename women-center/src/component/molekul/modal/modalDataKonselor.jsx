import React, { useState } from "react";
import ArtikelKonselor from "../artikelKonselor";
import ProfilKonselor from "../profilKonselor";
import IconEdit from "../../atom/iconEdit";
import { Modal, Button } from "react-bootstrap";
import KontenDataUser from "../../organisms/konten/kontenDataUser";
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
            <button onClick={openPopup} variant="link" className="bg-white">
                <IconEdit size={20} />
            </button>

            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Konselor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Konten pop-up */}
                    <KontenDataUser titleForms="Informasi Konselor" profil={<ProfilKonselor />}>
                        <ArtikelKonselor />
                    </KontenDataUser>
                </Modal.Body>
                <Modal.Footer>
                    {/* Tombol untuk menutup pop-up */}
                    {/* <Button variant="secondary" onClick={closePopup}>
              Tutup Pop-up
            </Button> */}
                </Modal.Footer>
            </Modal>

        </section>
    );
};

export default ModalDataKonselor;