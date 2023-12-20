import React, { useState } from "react";
import IconEdit from "../../Atom/iconEdit";
import { Modal } from "react-bootstrap";
import KontenJadwal from "../../Organism/konten/kontenJadwal";
import '../../../styles/modalJadwal.css';
import Button from "react-bootstrap/Button";
import Buttonn from "../../Atom/button/button";
const ModalJadwal = () => {
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
            <Button onClick={openPopup} className=" custom-button">
            Jadwal
            </Button>
            
            {/* Pop-up */}
            <Modal show={showPopup} onHide={closePopup} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Jadwal </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <KontenJadwal onClose={closePopup}/>
                </Modal.Body>
                <Modal.Footer>
                <div className="position-absolute bottom-0 end-0 p-3">
                    <div className='d-flex gap-2'>
                        <Buttonn 
                            className={"bg-white text-primary"}
                            label="Batal" 
                            // onClick nya diisi sesuai kondisi
                            onClick={closePopup}
                        />
                        <Buttonn
                            className={"bg-button"}
                            label="Simpan" 
                             // onClick nya diisi sesuai kondisi
                            onClick={""}
                        />
                    </div>
                </div>
                </Modal.Footer>
            </Modal>

        </section>
    );
};

export default ModalJadwal;