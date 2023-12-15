import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import KontenTambah from "../Component/kontenTambah";
import KontenEditAcara from "../../Organism/konten/kontenEditAcara";
import "../../../styles/ModalTambahEditAcara.css";
import "../../../assets/icon/edit_konseling.svg";
import IconEditKonselingJadwal from '../../../assets/icon/edit_konseling.svg'

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

            <button style={{border: 'none', background: 'none'}} onClick={openPopup} variant="link">
                <img src={IconEditKonselingJadwal} alt=""style={{width: '10px', height: '18px', marginLeft: '-10px'}}/>
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